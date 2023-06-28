import { test, expect } from "@playwright/test";
import fs from "fs";
import jsYaml from "js-yaml";

test.describe("navigation", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://127.0.0.1:5173/");
  });

  test("sidebar navigation should take user to appropriate sections", async ({
    page,
  }) => {
    const data = jsYaml.load(
      fs.readFileSync("src/data/data.generated.yml", "utf8")
    );
    let sections = data.app.sections.content as Array<any>;
    sections = [
      {
        id: "header",
        title: data.app.header.name,
      },
      ...sections,
    ];

    if (sections.length > 1) {
      sections = sections
        .slice(sections.length / 2)
        .concat(sections.slice(0, sections.length / 2));
    }

    for (const section of sections) {
      await page
        .locator("#sidebar")
        .getByRole("button", { name: section.title })
        .click();
      const headingElement = await page.getByRole("heading", {
        name: section.title,
      });
      expect(
        headingElement,
        `Heading for ${section.title} is not visible`
      ).toBeVisible();

      const headingText = await headingElement.textContent();
      expect(
        headingText + "fail",
        `Heading for ${section.id} is not ${section.title}`
      ).toEqual(section.title);
    }
  });
});
