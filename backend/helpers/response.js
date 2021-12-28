const response = (success, status, message, result) => {
  return {
    success: success,
    status: status,
    message: message,
    result: result,
  };
};

module.exports = response;
