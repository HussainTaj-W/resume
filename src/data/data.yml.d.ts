declare const data: {
  app: {
    title: string;
    faviconUrl: string;
    header: {
      name: string;
      title: string;
      years: string;
      tagline: string;
      image: {
        src: string;
        alt: string;
      };
    };
    footer: {
      attributions: {
        what: string;
        whom: {
          name: string;
          url: string;
        };
      }[];
    };
    sections: {
      content: ({
        id: string;
        title: string;
        timeline: {
          content: ({
            from: string;
            to: string;
            institution: {
              name: string;
              uri: string;
            };
            title: string;
            skills: {
              type: string;
              references: string;
              content: number[];
            };
            description: {
              format: string;
              content: string;
            };
            gallery: {
              content: {
                src: string;
                alt: string;
              }[];
            };
          } | {
            from: string;
            to: string;
            institution: {
              name: string;
              uri: string;
            };
            title: string;
            skills: {
              type: string;
              references: string;
              content: number[];
            };
            description: {
              content: string;
            };
            gallery: {
              content: {
                src: string;
                alt: string;
              }[];
            };
          })[];
        };
      } | {
        id: string;
        title: string;
        timeline: {
          content: ({
            from: string;
            to: string;
            institution: {
              name: string;
              uri: string;
            };
            title: string;
            skills: {
              type: string;
              references: string;
              content: number[];
            };
            description: {
              content: string;
            };
            gallery: {
              content: {
                src: string;
                alt: string;
              }[];
            };
          } | {
            from: string;
            to: string;
            institution: {
              name: string;
              uri: string;
            };
            title: string;
            skills: {
              type: string;
              references: string;
              content: number[];
            };
            description: {
              content: string;
            };
          })[];
        };
      } | {
        id: string;
        title: string;
        collection: {
          content: {
            title: string;
            skills: {
              type: string;
              references: string;
              content: number[];
            };
          }[];
        };
      } | {
        id: string;
        title: string;
        catwalk: {
          content: ({
            work: {
              title: string;
              image: {
                src: string;
                alt: string;
              };
              description: string;
              content: {
                column: {
                  content: ({
                    links: {
                      content: {
                        name: string;
                        uri: string;
                        image: {
                          src: string;
                          alt: string;
                        };
                      }[];
                    };
                  } | {
                    spacer: {
                      size: number;
                    };
                  } | {
                    skills: {
                      type: string;
                      references: string;
                      content: number[];
                    };
                  } | {
                    description: {
                      content: string;
                    };
                  } | {
                    gallery: {
                      content: {
                        src: string;
                        alt: string;
                      }[];
                    };
                  })[];
                };
              };
            };
          } | {
            work: {
              title: string;
              image: {
                src: string;
                alt: string;
              };
              description: string;
              content: {
                links: {
                  content: {
                    name: string;
                    uri: string;
                    image: {
                      src: string;
                      alt: string;
                    };
                  }[];
                };
                spacer: {
                  size: number;
                };
                skills: {
                  type: string;
                  references: string;
                  content: number[];
                };
                description: {
                  content: string;
                };
                gallery: {
                  content: {
                    src: string;
                    alt: string;
                  }[];
                };
              };
            };
          })[];
        };
      } | {
        id: string;
        title: string;
        row: {
          content: {
            collection: {
              content: ({
                contact: {
                  name: string;
                  address: string;
                  uri: string;
                  image: {
                    src: string;
                    alt: string;
                  };
                };
              } | {
                contact: {
                  name: string;
                  address: string;
                  uri: string;
                  image: {
                    src: string;
                    alt: string;
                  };
                  external: boolean;
                };
              })[];
            };
            formspree: {
              id: string;
              response: string;
            };
          };
        };
      })[];
    };
  };
  skills: ({
    id: number;
    name: string;
    image: {
      src: string;
      alt: string;
    };
    score: number;
    level: string;
  } | {
    id: number;
    name: string;
    image: {
      src: string;
      alt: string;
    };
    score: null;
    level: string;
  } | {
    id: number;
    name: string;
    image: {
      src: string;
      alt: string;
    };
    score: null;
    level: null;
  })[];
};
export default data;
