const Auth0 = require('auth0')
const uniqid = require('uniqid')
const JsonBinIoApi = require('jsonbin-io-api');

const JsonApi = new JsonBinIoApi(process.env.JSONBIN_API_KEY);

const ManagementClient = Auth0.ManagementClient;

const Auth0ManageClient = new ManagementClient({
  domain: process.env.AUTH0_DOMAIN,
  clientId: process.env.AUTH0_CLIENT_ID,
  clientSecret: process.env.AUTH0_CLIENT_SECRET,
  scope: 'update:users read:users'
});

const GetKey = (prefix, affix) => {

  return uniqid(prefix, affix);

}

const InitUserMeta = (id) => {

  return JsonApi.createCollection({
    data: {
      name: `u-${id}`
    }
  });

}

// const GetUserMeta = (User) => {

//   return new Promise((resolve, reject) => {

//     Auth0ManageClient.getUser(User)
//       .then(value => {

//         resolve(value.user_metadata)

//       })

//   })
  
// }

// const GetUserAppMeta = (User) => {

//   return new Promise((resolve, reject) => {

//     Auth0ManageClient.getUser(User)
//       .then(value => {

//         resolve(value.app_metadata)

//       })

//   })
  
// }

// const UpdateUserMeta = async (User, Meta) => {

//   await Auth0ManageClient.updateUserMetadata(User, {
//     ...Meta
//   })
  
// }

// const UpdateUserAppMeta = async (User, Meta) => {

//   await Auth0ManageClient.updateAppMetadata(User, {
//     ...Meta
//   })
  
// }

//
// TODO: move json usage to jsonbin (linked above)
// return JsonApi.createBin({
    
//   collectionId: `user_${User}`,
//   data: {},
//   isPrivate: true

// });
//
//

const GetMeta = (User) => {

  return new Promise((resolve, reject) => {

    Auth0ManageClient.getUser(User)
      .then(value => {

        resolve(value.user_metadata)

      })

  })
  
}

const GetAppMeta = (User) => {

  return new Promise((resolve, reject) => {

    Auth0ManageClient.getUser(User)
      .then(value => {

        resolve(value?.app_metadata || {})

      })

  })
  
}

const UpdateMeta = async (User, Meta) => {

  await Auth0ManageClient.updateUserMetadata(User, {
    ...Meta
  })
  
}

const UpdateAppMeta = async (User, Meta) => {

  await Auth0ManageClient.updateAppMetadata(User, {
    ...Meta
  })
  
}

module.exports = { InitUserMeta, UpdateMeta, UpdateAppMeta, GetMeta, GetAppMeta, GetKey }