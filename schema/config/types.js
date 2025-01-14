const Joi = require('joi');
const { GetKey } = require('../meta')

const Schema = Joi.object().keys({
  
  key: Joi.string().default((parent, helpers)=>{return GetKey()}),

  label: Joi.string().required(),
  labels: Joi.object().keys({
    name: Joi.string(),
    singular_name: Joi.string(),
    menu_name: Joi.string(),
    name_admin_bar: Joi.string(),
  }),
  description: Joi.string(),
  public: Joi.boolean(),
  heirarchical: Joi.boolean(),
  exclude_from_search: Joi.boolean(),
  publicly_queryable: Joi.boolean(),
  show_ui: Joi.boolean(),
  show_in_menu: Joi.boolean(),
  show_in_nav_menus: Joi.boolean(),
  show_in_admin_bar: Joi.boolean(),
  show_in_rest: Joi.boolean(),
  rest_base: Joi.string(),
  rest_controller_class: Joi.string(),
  menu_position: Joi.number(),
  menu_icon: Joi.string(),
  capability_type: Joi.string(),
  capabilities: Joi.object().keys({
    edit_post: Joi.string(),
    read_post: Joi.string(),
    delete_post: Joi.string(),
    edit_posts: Joi.string(),
    edit_others_posts: Joi.string(),
    publish_posts: Joi.string(),
    read_private_posts: Joi.string()
  }),
  map_meta_cap: Joi.boolean(),
  supports: Joi.array().items(Joi.string()),
  register_meta_box_cb: Joi.string(),
  taxonomies: Joi.array().items(Joi.string()),
  has_archive: Joi.boolean(),
  rewrite: Joi.object().keys({
    slug: Joi.string(),
    with_front: Joi.boolean(),
    feeds: Joi.boolean(),
    pages: Joi.boolean(),
    ep_mask: Joi.number()
  }),
  query_var: Joi.string(),
  can_export: Joi.boolean(),
  delete_with_user: Joi.boolean(),
  template: Joi.array().items(Joi.string()), // replace with @blocks[]
  template_lock: Joi.string().valid('all', 'insert'),

  "@styles": Joi.array().items(require('./styles').Schema),
  "@scripts": Joi.array().items(require('./scripts').Schema),
  "@fields": Joi.array().items(require('./fields').Schema),
  "@pages": Joi.array().items(require('./pages').Schema),
  "@taxonomies": Joi.array().items(require('./taxonomies').Schema)

})

const SchemaDoc = {
  label: "Post Types",
  documentation: 'https://developer.wordpress.org/reference/functions/register_post_type/',
  supportsTemplates: true,
  schema: {
    key: {
      // group: 'Labels',
      label: 'Key',
      description: `(string) (Required) Name of the post type. Should be unique.`,
      type: 'text',
      required: true,
      placeholder: 'my-post-type'
    },
    label: {
      // group: 'Labels',
      label: 'Label',
      description: `(string) Name of the post type shown in the menu. Usually plural. Default is value of $labels['name'].`,
      type: 'text',
      required: true,
      default: '',
      placeholder: 'My Post Type',
      invalidValues: [
        'post',
        'page',
        'attachment',
        'revision',
        'nav_menu_item',
        'custom_css',
        'customize_changeset',
        'oembed_cache',
        'user_request',
        'wp_block',
        'action',
        'author',
        'order',
        'theme',
      ]
    },
    labels: {
      // group: 'Labels',
      label: 'Labels',
      description: `(array) An array of labels for this post type. If not set, post labels are inherited for non-hierarchical types and page labels for hierarchical ones. See get_post_type_labels() for a full list of supported labels.`,
      type: 'keys',
      allowOther: true,
      keys: {
        'name': { type: 'text', placeholder: 'Post Types' },
        'singular_name': { type: 'text', placeholder: 'Post Type' },
        'menu_name': { type: 'text', placeholder: 'Post Types' },
        'name_admin_bar': { type: 'text', placeholder: 'Post Type' },
        'archives': { type: 'text', placeholder: 'Item Archives' },
        'attributes': { type: 'text', placeholder: 'Item Attributes' },
        'parent_item_colon': { type: 'text', placeholder: 'Parent Item:' },
        'all_items': { type: 'text', placeholder: 'All Items' },
        'add_new_item': { type: 'text', placeholder: 'Add New Item' },
        'add_new': { type: 'text', placeholder: 'Add New' },
        'new_item': { type: 'text', placeholder: 'New Item' },
        'edit_item': { type: 'text', placeholder: 'Edit Item' },
        'update_item': { type: 'text', placeholder: 'Update Item' },
        'view_item': { type: 'text', placeholder: 'View Item' },
        'view_items': { type: 'text', placeholder: 'View Items' },
        'search_items': { type: 'text', placeholder: 'Search Item' },
        'not_found': { type: 'text', placeholder: 'Not found' },
        'not_found_in_trash': { type: 'text', placeholder: 'Not found in Trash' },
        'featured_image': { type: 'text', placeholder: 'Featured Image' },
        'set_featured_image': { type: 'text', placeholder: 'Set featured image' },
        'remove_featured_image': { type: 'text', placeholder: 'Remove featured image' },
        'use_featured_image': { type: 'text', placeholder: 'Use as featured image' },
        'insert_into_item': { type: 'text', placeholder: 'Insert into item' },
        'uploaded_to_this_item': { type: 'text', placeholder: 'Uploaded to this item' },
        'items_list': { type: 'text', placeholder: 'Items list' },
        'items_list_navigation': { type: 'text', placeholder: 'Items list navigation' },
        'filter_items_list': { type: 'text', placeholder: 'Filter items list' }
      },
    },
    description: {
      // group: 'Labels',
      label: 'Description',
      description: `(string) A short descriptive summary of what the post type is.`,
      type: 'textarea',
      placeholder: 'My descriptive summary...',
      default: ''
    },
    public: {
      label: 'Public',
      description: `(bool) Whether a post type is intended for use publicly either via the admin interface or by front-end users. While the default settings of $exclude_from_search, $publicly_queryable, $show_ui, and $show_in_nav_menus are inherited from public, each does not rely on this relationship and controls a very specific intention. Default false.`,
      type: 'boolean',
      default: true
    },
    hierarchical: {
      label: 'Hierarchical',
      description: `(bool) Whether the post type is hierarchical (e.g. page). Default false.`,
      type: 'boolean',
      default: false
    },
    exclude_from_search: {
      label: 'Exclude from search?',
      description: `(bool) Whether to exclude posts with this post type from front end search results. Default is the opposite value of $public.`,
      type: 'boolean',
      default: false
    },
    publicly_queryable: {
      label: 'Publicly Queryable',
      description: `(bool) Whether queries can be performed on the front end for the post type as part of parse_request(). e.g. /index.php?post_type=id`,
      type: 'boolean',
      default: true
    },
    show_ui: {
      label: 'Show UI',
      description: `(bool) Whether to generate and allow a UI for managing this post type in the admin. Default is value of $public.`,
      type: 'boolean',
      default: true
    },
    show_in_menu: {
      label: 'Show in Menu',
      description: `(bool|string) Where to show the post type in the admin menu. To work, $show_ui must be true. If true, the post type is shown in its own top level menu. If false, no menu is shown. If a string of an existing top level menu (eg. 'tools.php' or 'edit.php?post_type=page'), the post type will be placed as a sub-menu of that. Default is value of $show_ui.`,
      type: 'text',
      default: true
    },
    show_in_nav_menus: {
      label: 'Show in Nav Menus',
      description: `(bool) Makes this post type available for selection in navigation menus. Default is value of $public.`,
      type: 'boolean',
      default: true
    },
    show_in_admin_bar: {
      label: 'Show in Admin Bar',
      description: `(bool) Makes this post type available via the admin bar. Default is value of $show_in_menu.`,
      type: 'boolean',
      default: true
    },
    show_in_rest: {
      label: 'Show in REST',
      description: `(bool) Whether to include the post type in the REST API. Set this to true for the post type to be available in the block editor.`,
      type: 'boolean',
      default: true
    },
    rest_base: {
      label: 'REST Base Url',
      description: `(string) To change the base url of REST API route. Default is $post_type.`,
      type: 'text',
      default: 'BASE'
    },
    rest_controller_class: {
      label: 'REST Controller Class',
      description: `(string) REST API Controller class name. Default is 'WP_REST_Posts_Controller'.`,
      type: 'text',
      placeholder: 'SomeCustomClass'
    },
    menu_position: {
      label: 'Menu Position',
      description: `(int) The position in the menu order the post type should appear. To work, $show_in_menu must be true. Default null (at the bottom).`,
      type: 'text',
      placeholder: '0'
    },
    menu_icon: {
      label: 'Menu Icon',
      description: `(string) The url to the icon to be used for this menu. Pass a base64-encoded SVG using a data URI, which will be colored to match the color scheme -- this should begin with 'data:image/svg+xml;base64,'. Pass the name of a Dashicons helper class to use a font icon, e.g. 'dashicons-chart-pie'. Pass 'none' to leave div.wp-menu-image empty so an icon can be added via CSS. Defaults to use the posts icon.`,
      type: 'text',
      default: "",
      placeholder: "dashicon-post"
    },
    capability_type: {
      label: 'Capability Type',
      description: `(string) The string to use to build the read, edit, and delete capabilities. May be passed as an array to allow for alternative plurals when using this argument as a base to construct the capabilities, e.g. array('story', 'stories'). Default 'post'.`,
      type: 'string[]'
    },
    capabilities: {
      label: 'Capabilities',
      description: `(array) Array of capabilities for this post type. $capability_type is used as a base to construct capabilities by default. See get_post_type_capabilities().`,
      type: 'keys',
      keys: {
        'edit_post': { type: 'text', placeholder: 'Post Types' },
        'read_post': { type: 'text', placeholder: 'Read Post' },
        'delete_post': { type: 'text', placeholder: 'Delete Post' },
        'edit_posts': { type: 'text', placeholder: 'Edit Posts' },
        'edit_others_posts': { type: 'text', placeholder: 'Edit Others Posts' },
        'publish_posts': { type: 'text', placeholder: 'Publish Posts' },
        'read_private_posts': { type: 'text', placeholder: 'Read Private Posts' }
      }
    },
    map_meta_cap: {
      label: 'Map Meta Cap',
      description: `(bool) Whether to use the internal default meta capability handling. Default false.`,
      type: 'boolean',
      default: false
    },
    supports: {
      // group: 'Feature Support',
      description: `(array) Core feature(s) the post type supports. Serves as an alias for calling add_post_type_support() directly. Core features include 'title', 'editor', 'comments', 'revisions', 'trackbacks', 'author', 'excerpt', 'page-attributes', 'thumbnail', 'custom-fields', and 'post-formats'. Additionally, the 'revisions' feature dictates whether the post type will store revisions, and the 'comments' feature dictates whether the comments count will show on the edit screen. A feature can also be specified as an array of arguments to provide additional information about supporting that feature. Example: array( 'my_feature', array( 'field' => 'value' ) ). Default is an array containing 'title' and 'editor'.`,
      label: 'Supports',
      type: 'multiselect',
      options: [
        'title',
        'editor',
        'thumbnail',
        'comments',
        'trackbacks',
        'revisions',
        'custom-fields',
        'page-attributes',
        'post-formats'
      ],
      default: [
        'title',
        'editor',
        'thumbnail',
        'comments',
        'trackbacks',
        'revisions',
        'custom-fields',
        'page-attributes',
        'post-formats'
      ],
    },
    register_meta_box_cb: {
      label: "Register Metabox Callback",
      description: `(callable) Provide a callback function that sets up the meta boxes for the edit form. Do remove_meta_box() and add_meta_box() calls in the callback. Default to null unless "POST_NAME.php" is present in the metabox folder.`,
      type: 'text',
      default: "",
      placeholder: "my_custom_callback" 
    },
    taxonomies: {
      // group: 'Relations',
      description: `(array) An array of taxonomy identifiers that will be registered for the post type. Taxonomies can be registered later with register_taxonomy() or register_taxonomy_for_object_type().`,
      label: 'Taxonomies',
      type: 'string[]',
      default: ['category','post_tag']
    },
    has_archive: {
      label: 'Has Archive',
      description: `(bool|string) Whether there should be post type archives, or if a string, the archive slug to use. Will generate the proper rewrite rules if $rewrite is enabled. Default false.`,
      type: 'boolean',
      default: false
    },
    rewrite: {
      label: 'Rewrite',
      description: `(bool|array) Triggers the handling of rewrites for this post type. To prevent rewrite, set to false. Defaults to true, using $post_type as slug. To specify rewrite rules, an array can be passed with any of these keys:`,
      type: 'keys',
      keys: {
        'slug': { type: 'text', placeholder: 'slug' },
        'with_front': { type: 'boolean', placeholder: true },
        'feeds': { type: 'boolean', placeholder: true },
        'pages': { type: 'boolean', placeholder: true },
        'ep_mask': { type: 'text', placeholder: 'EP_PERMALINK' }
      }
    },
    can_export: {
      label: 'Can Export',
      description: `(bool) Whether to allow this post type to be exported. Default true.`,
      type: 'boolean',
      default: true
    },
    delete_with_user: {
      label: 'Delete with User',
      description: `(bool) Whether to delete posts of this type when deleting a user. If true, posts of this type belonging to the user will be moved to Trash when then user is deleted. If false, posts of this type belonging to the user will *not* be trashed or deleted. If not set (the default), posts are trashed if post_type_supports('author'). Otherwise posts are not trashed or deleted. Default null.`,
      type: 'boolean',
      default: null
    },
    "@fields": {
      label: 'Fields',
      description: `(array) An array of custom fields to attach to this custom post type.`,
      type: 'repeater',
      repeater: 'fields',
      required: true,
      force: {
        object_type: ['!this']
      },
      columns: [
        { label: "Key", key: "key", type: "key" }
      ],
    },
    "@taxonomies": {
      label: 'Taxonomies',
      description: `(array) An array of taxonomies to attach to this custom post type.`,
      type: 'repeater',
      repeater: 'taxonomies',
      required: true,
      force: {
        object_type: ['!this']
      },
      columns: [
        { label: "Key", key: "key", type: "key" }
      ],
    }
  },
  table: {
    columns: [
      { label: "Key", key: "key", type: "key" },
      { label: "Description", key: "description" },
      { label: "Public", key: "public", type: "boolean" },
      { label: "Hierarchical", key: "hierarchical", type: "boolean" }
    ]
  }
}

module.exports = { Schema, SchemaDoc }