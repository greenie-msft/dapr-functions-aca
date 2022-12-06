module.exports = async function (context, req) {
  context.log('JavaScript HTTP trigger function processed a request.');
  const key = Object.keys(req.body)[0]

  context.bindings.daprSaveState = {
    key: key,
    value: req.body[key]
  };

  context.res = {
    status: 200
  };
};