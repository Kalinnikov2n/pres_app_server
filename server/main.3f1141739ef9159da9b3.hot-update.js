exports.id = "main";
exports.modules = {

/***/ "./src/resolvers/resolvers.ts":
/*!************************************!*\
  !*** ./src/resolvers/resolvers.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
var item = {
    id: 'sdssdsd',
    title: 'sdds',
    description: '',
};
exports.resolvers = {
    Query: {
        todosList: function () { return [item]; },
        todoGet: function (params) {
            console.log(params);
            return item;
        },
    },
    Mutation: {
        todosDeleteMutation: function (params) {
            console.log(params);
            return item;
        },
        todosUpdateMutation: function (params) {
            console.log(params);
            return item;
        },
        todosCreateMutation: function () {
            console.log(params);
            return item;
        },
    },
};


/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVzb2x2ZXJzL3Jlc29sdmVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxlQUFlLEVBQUU7QUFDakQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTCIsImZpbGUiOiJtYWluLjNmMTE0MTczOWVmOTE1OWRhOWIzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMucmVzb2x2ZXJzID0gdm9pZCAwO1xudmFyIGl0ZW0gPSB7XG4gICAgaWQ6ICdzZHNzZHNkJyxcbiAgICB0aXRsZTogJ3NkZHMnLFxuICAgIGRlc2NyaXB0aW9uOiAnJyxcbn07XG5leHBvcnRzLnJlc29sdmVycyA9IHtcbiAgICBRdWVyeToge1xuICAgICAgICB0b2Rvc0xpc3Q6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtpdGVtXTsgfSxcbiAgICAgICAgdG9kb0dldDogZnVuY3Rpb24gKHBhcmFtcykge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocGFyYW1zKTtcbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICB9LFxuICAgIH0sXG4gICAgTXV0YXRpb246IHtcbiAgICAgICAgdG9kb3NEZWxldGVNdXRhdGlvbjogZnVuY3Rpb24gKHBhcmFtcykge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocGFyYW1zKTtcbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICB9LFxuICAgICAgICB0b2Rvc1VwZGF0ZU11dGF0aW9uOiBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwYXJhbXMpO1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgIH0sXG4gICAgICAgIHRvZG9zQ3JlYXRlTXV0YXRpb246IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHBhcmFtcyk7XG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgfSxcbiAgICB9LFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=