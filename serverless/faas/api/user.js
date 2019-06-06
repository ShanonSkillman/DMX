module.exports.handler = async (event) => {
  const user = [
    {
      id: 1,
      username: 'panda',
      name: 'sylvia',
      email: 'aaa@aaa.com'
    }
  ];

  return {
    statusCode: 200,
    headers: {},
    body: JSON.stringify({
      data:user
    }, null, 2),
  };
}
