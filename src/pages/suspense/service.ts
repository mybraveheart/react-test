export const changeUsername = username => ({
  url: '/api/changeUsername',
  method: 'post',
  data: { username: username || 'username' },
});
