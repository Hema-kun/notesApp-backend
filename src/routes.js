const {
  addNoteHandler,
  getAllNoteshandler,
  editNoteByIdHandler,
  deleteNoteByIdHandler,
  getNotebyIdhHandler,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
  },
  {
    method: "GET",
    path: '/notes',
    handler: getAllNoteshandler,
  },
  {
    method: "GET",
    path: '/notes/{id}',
    handler: getNotebyIdhHandler,
  },
  {
    method: "PUT",
    path: '/notes/{id}',
    handler: editNoteByIdHandler,
  },
  {
    method: "DELETE",
    path: '/notes/{id}',
    handler: deleteNoteByIdHandler,
  },
];

module.exports = routes;
