/*
crud
    read
    create 
    update
    delete
*/

import boardMock from "../mock/mock.json" assert { type: "json" };
console.log(boardMock);
// 배열

// read
// 어디에다가 추가하고 싶은지?
// board-list
const $boardList = document.querySelector(".board-list");

// 최종 구현 형태?
/*
    <article class="board-card">
        <h3 class="flex-center">
            example-title
            <button id="butn">삭제</button>
        </h3>
        <div class="flex-center">example-content</div>
    </article>
*/

// const boardList = boardMock
//     .map((board) => {
//         return `
//     <article class="board-card" data-role=${board.id}>
//         <h3 class="flex-center">${board.title}
//             <button id="butn">삭제</button>
//         </h3>
//         <div class="flex-center">
//             ${board.content}
//         </div>
//     </article>
//     `;
//     })
//     .join("");

// $boardList.innerHTML = boardList;

boardMock.forEach((board) => {
    renderBoard({
        id: board.id,
        title: board.title,
        content: board.content,
    });
});

// create
// 어디에다가 추가하고 싶은지?
// 최종 구현 형태

const $writeBtn = document.querySelector(".write-btn");
const $title = document.querySelector(".title");
const $content = document.querySelector(".content");

$writeBtn.addEventListener("click", () => {
    // 예외처리
    if (!$title.value.trim() || !$content.value.trim()) {
        return alert("내용을 입력해주세요.");
    }
    const shortId = Math.floor(Math.random() * 10000000);
    renderBoard({
        id: shortId,
        title: $title.value,
        content: $content.value,
    });
    // 백엔드가 없기 때문에
    // 새로운 게시글이 포함된 데이터 요청이 불가능하니
    // 직접 배열에 데이터를 추가
    boardMock.push({
        id: shortId,
        title: $title.value,
        content: $content.value,
    });
    document.querySelector(".title").value = "";
    document.querySelector(".content").value = "";
});

function renderBoard(board) {
    const article = document.createElement("article");
    article.className = "board-card";
    article.setAttribute("data-role", board.id);
    article.addEventListener("click", getBoardDetail);
    article.innerHTML = `
    <h3 class="flex-center">${board.title}
        <button>삭제</button>
    </h3>
    <div class="flex-center">
        ${board.content}
    </div>
    `;
    $boardList.appendChild(article);
}

const $boardDetail = document.querySelector(".board-detail");

// detail
function getBoardDetail(e) {
    console.log(e.currentTarget);
    /*
        e.target 실제 클릭 대상 (h3, div)
        e.currentTarget 이벤트 등록 대상 (article)
    */
    // const childH3 = e.currentTarget.children[0];
    // const childDIV = e.currentTarget.children[1];
    // console.log(childH3, childDIV);

    // $boardDetail.innerHTML = `
    //     <button>수정</button>
    //     <p>${childH3.innerText}</p>
    //     <div>${childDIV.innerText}</div>
    // `;

    /*
        db -> 게시글이 등록 ->
        새로운 게시글이 추가된 데이터를 요청
        mockPost => 새로운 게시글이 이미 추가된 상태의 배열
    */
    const boardId = e.currentTarget.getAttribute("data-role"); // string
    const board = boardMock.find((board) => board.id === parseInt(boardId)); // 형변환
    $boardDetail.innerHTML = `
        <button>수정</button>
        <p>${board.title}</p>
        <div>${board.content}</div>
    `;
}

// delete
function deleteBoard(e) {
    console.log(e.currentTarget);
    // 과제, id, filter, renderBoard, innerHTML, 공통된 로직 분리
}
// update (심화)
