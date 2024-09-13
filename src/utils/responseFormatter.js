const formatResponse = (data, status = 200, message = '') => {
    return {
      status,
      message,
      data,
    };
  };
  
  module.exports = { formatResponse };
  