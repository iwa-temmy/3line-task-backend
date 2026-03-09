const express = require("express");
const router = express.Router();
const { getAllRoles, getRoleById } = require("../controllers/rolesController");

/**
 * @swagger
 * components:
 *   schemas:
 *     RoleUser:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         name:
 *           type: string
 *         avatar:
 *           type: string
 *     RoleUserSummary:
 *       type: object
 *       properties:
 *         visible:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/RoleUser'
 *         totalCount:
 *           type: integer
 *         extraCount:
 *           type: string
 *           nullable: true
 *           example: "+2"
 *     Role:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         name:
 *           type: string
 *         type:
 *           type: string
 *           enum: [DEFAULT, CUSTOM, SYSTEM-CUSTOM]
 *         dateCreated:
 *           type: string
 *           format: date
 *         status:
 *           type: string
 *           enum: [Active, Inactive]
 *         roleUsers:
 *           $ref: '#/components/schemas/RoleUserSummary'
 *     RoleDetail:
 *       allOf:
 *         - $ref: '#/components/schemas/Role'
 *         - type: object
 *           properties:
 *             roleUsers:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/RoleUser'
 */

/**
 * @swagger
 * /api/roles:
 *   get:
 *     summary: Fetch all user roles
 *     tags: [Roles]
 *     parameters:
 *       - in: query
 *         name: status
 *         schema:
 *           type: string
 *           enum: [Active, Inactive]
 *         description: Filter roles by status
 *       - in: query
 *         name: type
 *         schema:
 *           type: string
 *           enum: [DEFAULT, CUSTOM, SYSTEM-CUSTOM]
 *         description: Filter roles by type
 *     responses:
 *       200:
 *         description: A list of roles
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 count:
 *                   type: integer
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Role'
 */
router.get("/", getAllRoles);

/**
 * @swagger
 * /api/roles/{id}:
 *   get:
 *     summary: Fetch a single role by ID
 *     tags: [Roles]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The role ID
 *     responses:
 *       200:
 *         description: Role details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   $ref: '#/components/schemas/RoleDetail'
 *       400:
 *         description: Invalid role ID
 *       404:
 *         description: Role not found
 */
router.get("/:id", getRoleById);

module.exports = router;
