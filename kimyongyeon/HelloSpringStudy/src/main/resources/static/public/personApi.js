
// server의 url이 담긴 상수 변수
const URLPATH = "/list";

// HTTP respone 상태를 확인한다.
export const handleStatus = (status) => {
    if (status >= 400 && status < 500) {
        throw new Error("Bad request");
    }
    if (status > 500) {
        throw new Error("server error");
    }
};

// 서버로부터 person 정보가 담긴 json을 받는다.
export const fetchPersonData = async () => {
    try {
        const response = await fetch(URLPATH);
        handleStatus(response.status);
        return await response.json();
    } catch (error) {
        console.log("An error occured", error);
    }
};
