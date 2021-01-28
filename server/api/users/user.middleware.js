module.exports = (req, res, next) => {
  const { method, path } = req;
  try {
    console.table({ method, path });

    // This switch statement identifies which method is being sent from the request
    switch (method) {
      case "POST": {
        // This switch statement identifies the specific path that user is requesting from.
        switch (path) {
          case "/register": {
            break;
          }
        }
        break;
      }
    }
  } catch (error) {
    return error;
  }
};
