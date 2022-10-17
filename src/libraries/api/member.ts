export const getMembersUsernames = `
  query {
    members {
      _id
      username
      profilePicture
    }
  } 
`;