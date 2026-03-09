const roles = require("../data/roles");

// GET /api/roles — return all roles with summary display format
const getAllRoles = (req, res) => {
  const { status, type } = req.query;

  let filtered = [...roles];

  if (status) {
    filtered = filtered.filter(
      (r) => r.status.toLowerCase() === status.toLowerCase()
    );
  }

  if (type) {
    filtered = filtered.filter(
      (r) => r.type.toLowerCase() === type.toLowerCase()
    );
  }

  const result = filtered.map((role) => {
    const visibleUsers = role.roleUsers.slice(0, 4);
    const extraCount = role.roleUsers.length - visibleUsers.length;

    return {
      id: role.id,
      name: role.name,
      type: role.type,
      dateCreated: role.dateCreated,
      status: role.status,
      roleUsers: {
        visible: visibleUsers,
        totalCount: role.roleUsers.length,
        extraCount: extraCount > 0 ? `+${extraCount}` : null,
      },
    };
  });

  return res.status(200).json({
    success: true,
    count: result.length,
    data: result,
  });
};

// GET /api/roles/:id — return a single role by ID
const getRoleById = (req, res) => {
  const id = parseInt(req.params.id, 10);

  if (isNaN(id)) {
    return res.status(400).json({ success: false, message: "Invalid role ID" });
  }

  const role = roles.find((r) => r.id === id);

  if (!role) {
    return res
      .status(404)
      .json({ success: false, message: `Role with ID ${id} not found` });
  }

  return res.status(200).json({ success: true, data: role });
};

module.exports = { getAllRoles, getRoleById };
