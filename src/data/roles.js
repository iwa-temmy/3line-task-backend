const roles = [
  {
    id: 1,
    name: "Superadmin",
    type: "DEFAULT",
    dateCreated: "2023-01-01",
    status: "Active",
    roleUsers: [
      { id: 1, name: "Alice Johnson", avatar: "https://res.cloudinary.com/dekillerj/image/upload/v1773044646/2f1190870d753151f58657595136f67c584b5c8c_aq8sdu.png" },
      { id: 2, name: "Bob Smith", avatar: "https://res.cloudinary.com/dekillerj/image/upload/v1773044646/2780e16db1a4a364d3d872737f7fe9563d7abb29_chfc7p.png" },
      { id: 3, name: "Carol White", avatar: "https://res.cloudinary.com/dekillerj/image/upload/v1773044646/d688ab8bff2aebfc3cab587865468c4713ecad78_j48mcn.png" },
      { id: 4, name: "David Brown", avatar: "https://res.cloudinary.com/dekillerj/image/upload/v1773044646/c9b5ff46a30dabca6ca1e017e1047cd06f04270b_oeqzoe.png" },
      { id: 5, name: "Eva Green", avatar: "https://res.cloudinary.com/dekillerj/image/upload/v1773044645/504bc691102d8a6217d1fc1f8e79a810b1842a0d_n3in28.png" },
      { id: 6, name: "Frank Lee", avatar: "https://i.pravatar.cc/40?img=6" },
    ],
  },
  {
    id: 2,
    name: "Merchantadmin",
    type: "DEFAULT",
    dateCreated: "2023-02-01",
    status: "Active",
    roleUsers: [
      { id: 7, name: "Grace Hall", avatar: "https://i.pravatar.cc/40?img=7" },
      { id: 8, name: "Henry Clark", avatar: "https://i.pravatar.cc/40?img=8" },
      { id: 9, name: "Irene Lewis", avatar: "https://i.pravatar.cc/40?img=9" },
      { id: 10, name: "Jack Walker", avatar: "https://res.cloudinary.com/dekillerj/image/upload/v1773044646/2f1190870d753151f58657595136f67c584b5c8c_aq8sdu.png0" },
      { id: 11, name: "Karen Young", avatar: "https://res.cloudinary.com/dekillerj/image/upload/v1773044646/2f1190870d753151f58657595136f67c584b5c8c_aq8sdu.png1" },
    ],
  },
  {
    id: 3,
    name: "supportadmin",
    type: "DEFAULT",
    dateCreated: "2023-02-01",
    status: "Active",
    roleUsers: [
      { id: 12, name: "Liam Scott", avatar: "https://res.cloudinary.com/dekillerj/image/upload/v1773044646/2f1190870d753151f58657595136f67c584b5c8c_aq8sdu.png2" },
      { id: 13, name: "Mia Adams", avatar: "https://res.cloudinary.com/dekillerj/image/upload/v1773044646/2f1190870d753151f58657595136f67c584b5c8c_aq8sdu.png3" },
      { id: 14, name: "Noah Baker", avatar: "https://res.cloudinary.com/dekillerj/image/upload/v1773044646/2f1190870d753151f58657595136f67c584b5c8c_aq8sdu.png4" },
      { id: 15, name: "Olivia Carter", avatar: "https://res.cloudinary.com/dekillerj/image/upload/v1773044646/2f1190870d753151f58657595136f67c584b5c8c_aq8sdu.png5" },
    ],
  },
  {
    id: 4,
    name: "sales personnel",
    type: "CUSTOM",
    dateCreated: "2023-03-01",
    status: "Active",
    roleUsers: [
      { id: 16, name: "Paul Davis", avatar: "https://res.cloudinary.com/dekillerj/image/upload/v1773044646/2f1190870d753151f58657595136f67c584b5c8c_aq8sdu.png6" },
      { id: 17, name: "Quinn Evans", avatar: "https://res.cloudinary.com/dekillerj/image/upload/v1773044646/2f1190870d753151f58657595136f67c584b5c8c_aq8sdu.png7" },
    ],
  },
  {
    id: 5,
    name: "Deputy sales personnel",
    type: "CUSTOM",
    dateCreated: "2023-04-01",
    status: "Inactive",
    roleUsers: [
      { id: 18, name: "Rachel Foster", avatar: "https://res.cloudinary.com/dekillerj/image/upload/v1773044646/2f1190870d753151f58657595136f67c584b5c8c_aq8sdu.png8" },
      { id: 19, name: "Samuel Gray", avatar: "https://res.cloudinary.com/dekillerj/image/upload/v1773044646/2f1190870d753151f58657595136f67c584b5c8c_aq8sdu.png9" },
      { id: 20, name: "Tina Harris", avatar: "https://res.cloudinary.com/dekillerj/image/upload/v1773044646/2780e16db1a4a364d3d872737f7fe9563d7abb29_chfc7p.png0" },
    ],
  },
  {
    id: 6,
    name: "Developeradmin",
    type: "SYSTEM-CUSTOM",
    dateCreated: "2023-05-01",
    status: "Active",
    roleUsers: [
      { id: 21, name: "Uma Ingram", avatar: "https://res.cloudinary.com/dekillerj/image/upload/v1773044646/2780e16db1a4a364d3d872737f7fe9563d7abb29_chfc7p.png1" },
      { id: 22, name: "Victor James", avatar: "https://res.cloudinary.com/dekillerj/image/upload/v1773044646/2780e16db1a4a364d3d872737f7fe9563d7abb29_chfc7p.png2" },
      { id: 23, name: "Wendy King", avatar: "https://res.cloudinary.com/dekillerj/image/upload/v1773044646/2780e16db1a4a364d3d872737f7fe9563d7abb29_chfc7p.png3" },
    ],
  },
  {
    id: 7,
    name: "Developer-basic",
    type: "SYSTEM-CUSTOM",
    dateCreated: "2023-06-01",
    status: "Active",
    roleUsers: [
      { id: 24, name: "Xander Lopez", avatar: "https://res.cloudinary.com/dekillerj/image/upload/v1773044646/2780e16db1a4a364d3d872737f7fe9563d7abb29_chfc7p.png4" },
      { id: 25, name: "Yara Martin", avatar: "https://res.cloudinary.com/dekillerj/image/upload/v1773044646/2780e16db1a4a364d3d872737f7fe9563d7abb29_chfc7p.png5" },
    ],
  },
];

module.exports = roles;
