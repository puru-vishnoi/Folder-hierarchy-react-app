const explorer = {
  name: "root",
  isFolder: true,
  items: [
    {
      name: "public 1",
      isFolder: true,
      items: [
        {
          name: "nested 1",
          isFolder: true,
          items: [
            {
              name: "index.html",
              isFolder: false
            },
            {
              name: "hello.html",
              isFolder: false
            }
          ]
        }
      ]
    },
    {
      name: "public-2",
      isFolder: false
    },

    {
      name: "public-3",
      isFolder: true,
      items: [
        {
          name: "App.js",
          isFolder: true,
          items: [
            {
              name: "nested-2",
              isFolder: true,
              items: [
                {
                  name: "App.css",
                  isFolder: false
                },
                {
                  name: "hello.css",
                  isFolder: false
                }
              ]
            }
          ]
        },
        {
          name: "word.html",
          isFolder: false
        },
        {
          name: "package.json",
          isFolder: false
        }
      ]
    }
  ]
};

export default explorer;
