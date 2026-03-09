const roles = [
  {
    id: 1,
    name: "Superadmin",
    type: "DEFAULT",
    dateCreated: "2023-01-01",
    status: "Active",
    roleUsers: [
      { id: 1, name: "Alice Johnson", avatar: "https://i.pravatar.cc/40?img=1" },
      { id: 2, name: "Bob Smith", avatar: "https://i.pravatar.cc/40?img=2" },
      { id: 3, name: "Carol White", avatar: "https://i.pravatar.cc/40?img=3" },
      { id: 4, name: "David Brown", avatar: "https://i.pravatar.cc/40?img=4" },
      { id: 5, name: "Eva Green", avatar: "https://i.pravatar.cc/40?img=5" },
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
      { id: 10, name: "Jack Walker", avatar: "https://i.pravatar.cc/40?img=10" },
      { id: 11, name: "Karen Young", avatar: "https://i.pravatar.cc/40?img=11" },
    ],
  },
  {
    id: 3,
    name: "supportadmin",
    type: "DEFAULT",
    dateCreated: "2023-02-01",
    status: "Active",
    roleUsers: [
      { id: 12, name: "Liam Scott", avatar: "https://i.pravatar.cc/40?img=12" },
      { id: 13, name: "Mia Adams", avatar: "https://i.pravatar.cc/40?img=13" },
      { id: 14, name: "Noah Baker", avatar: "https://i.pravatar.cc/40?img=14" },
      { id: 15, name: "Olivia Carter", avatar: "https://i.pravatar.cc/40?img=15" },
    ],
  },
  {
    id: 4,
    name: "sales personnel",
    type: "CUSTOM",
    dateCreated: "2023-03-01",
    status: "Active",
    roleUsers: [
      { id: 16, name: "Paul Davis", avatar: "https://i.pravatar.cc/40?img=16" },
      { id: 17, name: "Quinn Evans", avatar: "https://i.pravatar.cc/40?img=17" },
    ],
  },
  {
    id: 5,
    name: "Deputy sales personnel",
    type: "CUSTOM",
    dateCreated: "2023-04-01",
    status: "Inactive",
    roleUsers: [
      { id: 18, name: "Rachel Foster", avatar: "https://i.pravatar.cc/40?img=18" },
      { id: 19, name: "Samuel Gray", avatar: "https://i.pravatar.cc/40?img=19" },
      { id: 20, name: "Tina Harris", avatar: "https://i.pravatar.cc/40?img=20" },
    ],
  },
  {
    id: 6,
    name: "Developeradmin",
    type: "SYSTEM-CUSTOM",
    dateCreated: "2023-05-01",
    status: "Active",
    roleUsers: [
      { id: 21, name: "Uma Ingram", avatar: "https://i.pravatar.cc/40?img=21" },
      { id: 22, name: "Victor James", avatar: "https://i.pravatar.cc/40?img=22" },
      { id: 23, name: "Wendy King", avatar: "https://i.pravatar.cc/40?img=23" },
    ],
  },
  {
    id: 7,
    name: "Developer-basic",
    type: "SYSTEM-CUSTOM",
    dateCreated: "2023-06-01",
    status: "Active",
    roleUsers: [
      { id: 24, name: "Xander Lopez", avatar: "https://i.pravatar.cc/40?img=24" },
      { id: 25, name: "Yara Martin", avatar: "https://i.pravatar.cc/40?img=25" },
    ],
  },
];

module.exports = roles;