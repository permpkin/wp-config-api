## Example JSON Defaults
```yaml
  {
      "origins": [
          "1.2.3.4"
      ],
      "overrides": {
          "hide_block_categories": [
              "example-category"
          ],
      },
      "supports": [
          "align-wide",
          "editor-styles",
          "post-formats",
          "post-thumbnails",
          "html5",
          "title-tag",
          "custom-background"
      ],
      "styles": [
          {
              "key": "example-theme-styles",
              "source": "@THEME/style.css",
              "insert": [
                  "front"
              ],
              "dependencies": [],
              "version": "1.0.0"
          }
      ],
      "scripts": [
          {
              "key": "main",
              "source": "@THEME/script.js",
              "insert": [
                  "front"
              ],
              "footer": true,
              "dependencies": [
                  "jquery"
              ]
          }
      ],
      "fields": [
          {
              "key": "group_123456789",
              "title": "Example Group",
              "fields": [
                  {
                      "type": "text"
                  }
              ],
              "location": [
                  [
                      "post_type",
                      "==",
                      "page"
                  ]
              ]
          }
      ],
      "types": [
          {
              "key": "example-post-type",
              "description": "Example Post Type Description",
              "label": "Example Post Type",
              "@options": [
                  {
                      "page_title": "Example Post Type Option",
                      "menu_title": "post-type-options",
                      "icon_url": "dashicon",
                      "capability": "test",
                      "key": "test-source22",
                      "autoload": true
                  }
              ],
              "@styles": [
                  {
                      "source": "asdasdas.css",
                      "dependencies": [
                          "thisthing"
                      ],
                      "insert": [
                          "back"
                      ],
                      "key": "mainthing"
                  }
              ],
              "@scripts": [
                  {
                      "source": "test-source",
                      "dependencies": [
                          "jquery"
                      ],
                      "insert": [
                          "front"
                      ],
                      "key": "test-source"
                  }
              ],
              "@fields": [
                  {
                      "key": "field_asdasd",
                      "title": "testest",
                      "fields": [
                          {
                              "key": "field_example",
                              "label": "example etxt",
                              "name": "example-test",
                              "type": "test"
                          }
                      ]
                  }
              ]
          },
          {
              "key": "Products",
              "label": "Products",
              "description": "Store Products",
              "labels": {
                  "name": "Products",
                  "singular_name": "Product",
                  "menu_name": "Products",
                  "name_admin_bar": "Product"
              },
              "supports": [
                  "title",
                  "editor",
                  "thumbnail"
              ],
              "menu_icon": "dashicons-editor-removeformatting",
              "hierarchical": false,
              "public": true,
              "show_ui": true,
              "show_in_menu": true,
              "menu_position": 5,
              "show_in_admin_bar": true,
              "show_in_nav_menus": true,
              "can_export": true,
              "has_archive": false,
              "exclude_from_search": true,
              "publicly_queryable": false,
              "rewrite": false,
              "delete_with_user": false,
              "capability_type": "page",
              "@styles": [
                  {
                      "source": "@THEME/style.css",
                      "insert": [
                          "front"
                      ],
                      "dependencies": [],
                      "key": "tpekey"
                  }
              ],
              "@scripts": [
                  {
                      "source": "@THEME/dist/main.js",
                      "insert": [
                          "front"
                      ],
                      "dependencies": [
                          "jquery"
                      ],
                      "key": "scriptkey"
                  }
              ],
              "@fields": [
                  {
                      "key": "group_example-group",
                      "title": "Example Post Fields",
                      "fields": [
                          {
                              "key": "field_example-text",
                              "label": "Example Text",
                              "name": "example-text",
                              "type": "text"
                          }
                      ]
                  }
              ],
              "@options": [
                  {
                      "key": "opt-test",
                      "page_title": "Options",
                      "menu_title": "Options",
                      "icon_url": "dashicons-forms",
                      "capability": "edit_posts",
                      "autoload": true
                  }
              ]
          }
      ],
      "blocks": [
          {
              "key": "example-block",
              "title": "Example Block",
              "description": "Example WP Block",
              "icon": "admin-page",
              "category": {
                  "slug": "my-category",
                  "title": "My category",
                  "icon": "wordpress"
              },
              "align": "full",
              "@styles": [
                  {
                      "source": "@THEME/style.css",
                      "key": "blockkey1",
                      "insert": [
                          "front"
                      ],
                      "dependencies": []
                  },
                  {
                      "source": "@THEME/stylezz.css",
                      "key": "blockkey2",
                      "insert": [
                          "front",
                          "back"
                      ],
                      "dependencies": []
                  }
              ],
              "@scripts": [
                  {
                      "source": "@THEME/dist/main.js",
                      "key": "blockscriptkey",
                      "insert": [
                          "front"
                      ],
                      "dependencies": [
                          "jquery"
                      ]
                  }
              ],
              "@fields": [
                  {
                      "title": "Block Settings",
                      "fields": [
                          {
                              "label": "Body Content",
                              "name": "body-content",
                              "type": "textarea"
                          }
                      ]
                  }
              ]
          }
      ],
      "pages": [
          {
              "key": "test-page",
              "page_title": "Title",
              "menu_title": "Title",
              "menu_slug": "title",
              "capability": "edit_posts",
              "position": 0,
              "icon_url": "icondashin",
              "callback": "callbackfn"
          },
          {
              "key": "TestLabel2",
              "page_title": "Some Thing",
              "menu_title": "options",
              "menu_slug": "asdasd",
              "capability": "test",
              "position": "2",
              "icon_url": "dashicon",
              "callback": "test-source22"
          }
      ],
      "settings": [
          {
              "key": "test-settings",
              "title": "Title",
              "priority": "1",
              "capability": "edit_posts",
              "description": "asdasd",
              "settings": [
                  {
                      "label": "testest",
                      "default": "set",
                      "type": "text",
                      "capability": "edit_post",
                      "transport": "test",
                      "input_type": "text",
                      "priority": "1"
                  }
              ]
          },
          {
              "key": "TestLabel2",
              "description": "TESTESTTESTasdsdad",
              "title": "TestLabel2",
              "settings": [
                  {
                      "label": "Some Thing",
                      "default": "options",
                      "type": "text",
                      "capability": "test",
                      "transport": "tesg",
                      "input_type": "asd",
                      "priority": "12"
                  }
              ]
          }
      ],
      "options": [
          {
              "key": "test-opts",
              "page_title": "Title",
              "menu_title": "Title",
              "menu_slug": "title",
              "capability": "edit_posts",
              "position": 2,
              "parent_slug": "my-parent-page",
              "icon_url": "dashicon",
              "redirect": true,
              "post_id": "options",
              "autoload": false,
              "update_button": "Update",
              "updated_message": "Options Updated"
          }
      ]
  }
```