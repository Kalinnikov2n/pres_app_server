exports.id = "main";
exports.modules = {

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = __webpack_require__(/*! express */ "express");
var morgan = __webpack_require__(/*! morgan */ "morgan");
var cors = __webpack_require__(/*! cors */ "cors");
var main_1 = __importDefault(__webpack_require__(/*! ./routes/main */ "./src/routes/main.ts"));
var apollo_server_express_1 = __webpack_require__(/*! apollo-server-express */ "apollo-server-express");
var config_1 = __webpack_require__(/*! ./config/config */ "./src/config/config.ts");
var schemas_1 = __webpack_require__(/*! ./schemas/schemas */ "./src/schemas/schemas.ts");
var resolvers_1 = __webpack_require__(/*! ./resolvers/resolvers */ "./src/resolvers/resolvers.ts");
var app = express();
var bodyParser = __webpack_require__(/*! body-parser */ "body-parser");
app.use(cors({
    origin: '*',
    credentials: true,
}));
app.use(morgan('short'));
app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.raw({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ limit: '5mb', extended: true }));
app.use(main_1.default);
var playground = true;
var server = new apollo_server_express_1.ApolloServer({
    typeDefs: schemas_1.schemas,
    resolvers: resolvers_1.resolvers,
    introspection: true,
    playground: playground,
});
server.applyMiddleware({
    app: app,
    path: '/graphql',
    cors: {
        origin: '*',
        credentials: true,
    },
});
app.listen(config_1.config.port, function () {
    console.log("Ready at http://localhost:" + config_1.config.port + server.graphqlPath);
});
if (true) {
    module.hot.accept();
    module.hot.dispose(function () { return server.stop(); });
}
exports.default = app;


/***/ }),

/***/ "./src/resolvers/resolvers.ts":
/*!************************************!*\
  !*** ./src/resolvers/resolvers.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
exports.resolvers = {
    Query: {
        todosList: function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2];
            });
        }); },
        todoGet: function (params) { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log(params);
                return [2];
            });
        }); },
    },
    Mutation: {
        todosDeleteMutation: function (params) { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log(params);
                return [2];
            });
        }); },
        todosUpdateMutation: function (params) { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log(params);
                return [2];
            });
        }); },
        todosCreateMutation: function () {
            console.log(params);
            return;
        },
    },
};


/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Jlc29sdmVycy9yZXNvbHZlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBYTtBQUNiO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsY0FBYyxtQkFBTyxDQUFDLHdCQUFTO0FBQy9CLGFBQWEsbUJBQU8sQ0FBQyxzQkFBUTtBQUM3QixXQUFXLG1CQUFPLENBQUMsa0JBQU07QUFDekIsNkJBQTZCLG1CQUFPLENBQUMsMkNBQWU7QUFDcEQsOEJBQThCLG1CQUFPLENBQUMsb0RBQXVCO0FBQzdELGVBQWUsbUJBQU8sQ0FBQywrQ0FBaUI7QUFDeEMsZ0JBQWdCLG1CQUFPLENBQUMsbURBQW1CO0FBQzNDLGtCQUFrQixtQkFBTyxDQUFDLDJEQUF1QjtBQUNqRDtBQUNBLGlCQUFpQixtQkFBTyxDQUFDLGdDQUFhO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLHlCQUF5QixlQUFlO0FBQ3hDLHdCQUF3QixlQUFlO0FBQ3ZDLCtCQUErQiwrQkFBK0I7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNELElBQUksSUFBVTtBQUNkO0FBQ0Esb0NBQW9DLHNCQUFzQixFQUFFO0FBQzVEO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM5Q2E7QUFDYjtBQUNBLDJCQUEyQiwrREFBK0QsZ0JBQWdCLEVBQUUsRUFBRTtBQUM5RztBQUNBLG1DQUFtQyxNQUFNLDZCQUE2QixFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ2pHLGtDQUFrQyxNQUFNLGlDQUFpQyxFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ3BHLCtCQUErQixxRkFBcUY7QUFDcEg7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGFBQWEsNkJBQTZCLDBCQUEwQixhQUFhLEVBQUUscUJBQXFCO0FBQ3hHLGdCQUFnQixxREFBcUQsb0VBQW9FLGFBQWEsRUFBRTtBQUN4SixzQkFBc0Isc0JBQXNCLHFCQUFxQixHQUFHO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QyxrQ0FBa0MsU0FBUztBQUMzQyxrQ0FBa0MsV0FBVyxVQUFVO0FBQ3ZELHlDQUF5QyxjQUFjO0FBQ3ZEO0FBQ0EsNkdBQTZHLE9BQU8sVUFBVTtBQUM5SCxnRkFBZ0YsaUJBQWlCLE9BQU87QUFDeEcsd0RBQXdELGdCQUFnQixRQUFRLE9BQU87QUFDdkYsOENBQThDLGdCQUFnQixnQkFBZ0IsT0FBTztBQUNyRjtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0EsU0FBUyxZQUFZLGFBQWEsT0FBTyxFQUFFLFVBQVUsV0FBVztBQUNoRSxtQ0FBbUMsU0FBUztBQUM1QztBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUyxFQUFFLEVBQUU7QUFDYixvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVMsRUFBRSxFQUFFO0FBQ2IsS0FBSztBQUNMO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTLEVBQUUsRUFBRTtBQUNiLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUyxFQUFFLEVBQUU7QUFDYjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMIiwiZmlsZSI6Im1haW4uZTZmMGI1YWIzNGE0MzYzZTQzZjQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGV4cHJlc3MgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTtcbnZhciBtb3JnYW4gPSByZXF1aXJlKFwibW9yZ2FuXCIpO1xudmFyIGNvcnMgPSByZXF1aXJlKFwiY29yc1wiKTtcbnZhciBtYWluXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vcm91dGVzL21haW5cIikpO1xudmFyIGFwb2xsb19zZXJ2ZXJfZXhwcmVzc18xID0gcmVxdWlyZShcImFwb2xsby1zZXJ2ZXItZXhwcmVzc1wiKTtcbnZhciBjb25maWdfMSA9IHJlcXVpcmUoXCIuL2NvbmZpZy9jb25maWdcIik7XG52YXIgc2NoZW1hc18xID0gcmVxdWlyZShcIi4vc2NoZW1hcy9zY2hlbWFzXCIpO1xudmFyIHJlc29sdmVyc18xID0gcmVxdWlyZShcIi4vcmVzb2x2ZXJzL3Jlc29sdmVyc1wiKTtcbnZhciBhcHAgPSBleHByZXNzKCk7XG52YXIgYm9keVBhcnNlciA9IHJlcXVpcmUoJ2JvZHktcGFyc2VyJyk7XG5hcHAudXNlKGNvcnMoe1xuICAgIG9yaWdpbjogJyonLFxuICAgIGNyZWRlbnRpYWxzOiB0cnVlLFxufSkpO1xuYXBwLnVzZShtb3JnYW4oJ3Nob3J0JykpO1xuYXBwLnVzZShib2R5UGFyc2VyLmpzb24oeyBsaW1pdDogJzVtYicgfSkpO1xuYXBwLnVzZShib2R5UGFyc2VyLnJhdyh7IGxpbWl0OiAnNW1iJyB9KSk7XG5hcHAudXNlKGJvZHlQYXJzZXIudXJsZW5jb2RlZCh7IGxpbWl0OiAnNW1iJywgZXh0ZW5kZWQ6IHRydWUgfSkpO1xuYXBwLnVzZShtYWluXzEuZGVmYXVsdCk7XG52YXIgcGxheWdyb3VuZCA9IHRydWU7XG52YXIgc2VydmVyID0gbmV3IGFwb2xsb19zZXJ2ZXJfZXhwcmVzc18xLkFwb2xsb1NlcnZlcih7XG4gICAgdHlwZURlZnM6IHNjaGVtYXNfMS5zY2hlbWFzLFxuICAgIHJlc29sdmVyczogcmVzb2x2ZXJzXzEucmVzb2x2ZXJzLFxuICAgIGludHJvc3BlY3Rpb246IHRydWUsXG4gICAgcGxheWdyb3VuZDogcGxheWdyb3VuZCxcbn0pO1xuc2VydmVyLmFwcGx5TWlkZGxld2FyZSh7XG4gICAgYXBwOiBhcHAsXG4gICAgcGF0aDogJy9ncmFwaHFsJyxcbiAgICBjb3JzOiB7XG4gICAgICAgIG9yaWdpbjogJyonLFxuICAgICAgICBjcmVkZW50aWFsczogdHJ1ZSxcbiAgICB9LFxufSk7XG5hcHAubGlzdGVuKGNvbmZpZ18xLmNvbmZpZy5wb3J0LCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc29sZS5sb2coXCJSZWFkeSBhdCBodHRwOi8vbG9jYWxob3N0OlwiICsgY29uZmlnXzEuY29uZmlnLnBvcnQgKyBzZXJ2ZXIuZ3JhcGhxbFBhdGgpO1xufSk7XG5pZiAobW9kdWxlLmhvdCkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlci5zdG9wKCk7IH0pO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gYXBwO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5yZXNvbHZlcnMgPSB2b2lkIDA7XG5leHBvcnRzLnJlc29sdmVycyA9IHtcbiAgICBRdWVyeToge1xuICAgICAgICB0b2Rvc0xpc3Q6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyXTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTsgfSxcbiAgICAgICAgdG9kb0dldDogZnVuY3Rpb24gKHBhcmFtcykgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwYXJhbXMpO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMl07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7IH0sXG4gICAgfSxcbiAgICBNdXRhdGlvbjoge1xuICAgICAgICB0b2Rvc0RlbGV0ZU11dGF0aW9uOiBmdW5jdGlvbiAocGFyYW1zKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHBhcmFtcyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyXTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTsgfSxcbiAgICAgICAgdG9kb3NVcGRhdGVNdXRhdGlvbjogZnVuY3Rpb24gKHBhcmFtcykgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwYXJhbXMpO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMl07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7IH0sXG4gICAgICAgIHRvZG9zQ3JlYXRlTXV0YXRpb246IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHBhcmFtcyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0sXG4gICAgfSxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9