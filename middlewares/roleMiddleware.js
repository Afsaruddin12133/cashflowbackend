exports.checkRole = (...allowedRoles) => {
    return (req, res, next) => {
      if (allowedRoles.includes(req.user.role)) {
        next();
      } else {
        res.status(403).json({ message: 'Access denied for your role' });
      }
    };
  };