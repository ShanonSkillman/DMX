module.exports.handler = async (event) => {
  const users = [
    {
      id: 1,
      username: 'panda',
      name: 'sylvia',
      email: 'aaa@aaa.com'
    },
    {
      id: 2,
      username: 'lonelyWaiter',
      name: 'tyler',
      email: 'tyler@aaa.com'
    }
  ];

  return {
    statusCode: 200,
    headers: {},
    body: JSON.stringify({
      data:users
    }, null, 2),
  };
}
