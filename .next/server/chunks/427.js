"use strict";
exports.id = 427;
exports.ids = [427];
exports.modules = {

/***/ 91692:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ TableRow)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
;// CONCATENATED MODULE: ./src/hooks/useEventListener.tsx

function useEventListener(eventType, callback) {
    const callbackRef = (0,react_.useRef)(callback);
    (0,react_.useEffect)(()=>{
        callbackRef.current = callback;
    }, [
        callback
    ]);
    (0,react_.useEffect)(()=>{
        if (window == null) return;
        // @ts-ignore
        const handler = (e)=>callbackRef.current(e);
        window.addEventListener(eventType, handler);
        return ()=>window.removeEventListener(eventType, handler);
    }, [
        eventType,
        window
    ]);
}

;// CONCATENATED MODULE: ./src/hooks/useWindowWidth.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 

const isClient = "undefined" === "object";
function useWindowWidth() {
    const [width, setWidth] = (0,react_.useState)(isClient ? window.innerWidth : 0);
    if (!isClient) return;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEventListener("resize", ()=>{
        setWidth(window.innerWidth);
    });
    return width;
}

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(52451);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./public/icons/index.tsx
var icons = __webpack_require__(95855);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(11440);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/Home-Page/IPOData/row-template.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 





function TableRow(props) {
    const width = useWindowWidth();
    const openIpoPage = ()=>{
        window.location.replace("/ipo/" + props.data.ipoID);
    };
    const statusClass = props.data.status === "Live" ? "text-green-500" : props.data.status === "Upcoming" ? "text-yellow-500" : "text-red-500";
    const blinkClass = (props.data.status === "Live" ? "bg-secondary custom-animate-ping" : props.data.status === "Upcoming" ? "bg-yellow-500" : "bg-red-500") + " w-[10px] h-[10px] mr-2 rounded-full";
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
        className: "w-[100%] " + (props.scaling === true ? "scaling-transition" : "") + " p-4 text-primary custom-tablerow text-[13px] md:text-[1.1rem]",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                className: "w-[10%]",
                children: props.data.sno
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                title: "See details",
                className: "w-[30%] text-left cursor-pointer",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "m-0 p-0 flex justify-start items-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: `/ipo/${props.data.ipoID}`,
                            children: props.data.name + ""
                        }),
                        Number(props.data.enddate.substring(0, 2)) === new Date().getDate() ? /*#__PURE__*/ jsx_runtime_.jsx(Closetag, {
                            width: width
                        }) : ""
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                className: "w-[12.5%]",
                children: props.data.opendate.substring(0, 10)
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                className: "w-[12.5%]",
                children: props.data.enddate.substring(0, 10)
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                className: statusClass + " w-[10%] ",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "m-0 p-0 flex justify-center items-center",
                    children: width && width > 600 ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                        children: [
                            props.data.status === "Live" ? /*#__PURE__*/ jsx_runtime_.jsx(Blink, {
                                blinkClass: blinkClass
                            }) : "",
                            props.data.status
                        ]
                    }) : /*#__PURE__*/ jsx_runtime_.jsx(Blink, {
                        blinkClass: blinkClass
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                className: "w-[5%] cursor-pointer",
                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    title: "See more",
                    className: " text-primary cursor-pointer flex items-center justify-center m-1 w-[30px] h-[20px] rounded-sm",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: `/ipo/${props.data.ipoID}`,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            title: "See more",
                            className: " text-primary flex items-center justify-center m-1  w-[30px] h-[20px] rounded-sm hover:translate-x-1",
                            src: icons/* RightArrow */.UV,
                            alt: "->",
                            height: 15,
                            width: 15
                        })
                    })
                })
            })
        ]
    });
}
function Closetag(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "flex items-center justify-center rounded-lg",
        children: props.width && props.width > 600 ? /*#__PURE__*/ jsx_runtime_.jsx("label", {
            className: "text-center w-[100px] text-[12px] border border-red-500 text-red-500 ml-2 px-[3px] rounded-lg",
            children: "Closing Today"
        }) : /*#__PURE__*/ jsx_runtime_.jsx("label", {
            className: "text-center text-white px-[3px] rounded-full ml-1 bg-red-500 font-semibold text-[8px]",
            children: "Closing"
        })
    });
}
function Blink(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: props.blinkClass
    });
}


/***/ }),

/***/ 7478:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ sanitizeData)
/* harmony export */ });
async function sanitizeData(data, length) {
    try {
        const arrayOfObjects = [];
        const dataObject = data;
        for(let i = 0; i < length; i++){
            const openDate = new Date(dataObject[i].opening_date);
            const closeDate = new Date(dataObject[i].closing_date);
            const currentDate = new Date();
            var status;
            if (dataObject[i].opening_date === null && dataObject[i].closing_date === null) status = "Upcoming";
            else if (currentDate >= openDate && closeDate >= currentDate) status = "Live";
            else status = "Closed";
            const object = {
                sno: i + 1,
                ipoID: dataObject[i].id,
                name: dataObject[i].name,
                opendate: dataObject[i].opening_date || "---",
                enddate: dataObject[i].closing_date || "---",
                status: status
            };
            arrayOfObjects.push(object);
        }
        return arrayOfObjects;
    } catch (error) {
        console.log(error);
        return [];
    }
}


/***/ })

};
;