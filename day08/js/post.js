const $nameInput = document.querySelector("#name");
const $titleInput = document.querySelector("#title");
const $writeBtn = document.querySelector("#write-btn");
const $postBody = document.querySelector("table tbody");

$writeBtn.addEventListener("click", () => {
    // name value, title value
    // tbody, html appendChild, insertBefore, insertAfter, ...
    // innerHTML
    // 내가 어디에 데이터를 추가하고 싶은가?
    // tbody, 아래로 누적, 위로 누적
    // 데이터를 어떤 형태로 추가해야 하는가
    /*
    <tr>
        <td>title</td>
        <td>name</td>
        <td>hits</td>
        <td>remove</td>
    </tr>
    */

    // innerHTML
    // const newPosts = `
    // <tr>
    //     <td>${$titleInput.value}</td>
    //     <td>${$nameInput.value}</td>
    //     <td>0</td>
    //     <td>
    //         <button>
    //             삭제
    //         </button>
    //     </td>
    // </tr>
    // `;
    // $postBody.innerHTML += newPosts;

    const newPosts = document.createElement("tr");
    // 비어있는 tr요소를 생성
    // 해당 요소에 html을 채워넣음.
    newPosts.innerHTML = `
    <td>${$titleInput.value}</td>
        <td>${$nameInput.value}</td>
        <td>0</td>
        <td>
            <button>
                삭제
            </button>
        </td>
    `;

    // $postBody.appendChild(newPosts);
    // 매개변수로 node(요소)를 받음, html (x)
    // 자식요소로 해당 요소가 추가됩니다.

    // $postBody.insertBefore(newPosts, null);
    // 해당 요소에 요소를 추가하는데
    // 첫 번째 인자로는 새로 추가할 노드(요소)
    // 두 번째 인자로는 기준이 되는 노드(노드 앞에 생성)
    // null이면 부모요소의 끝에 추가

    $postBody.insertAdjacentElement("beforebegin", newPosts);
    // 특정 노드(요소)에 앞 혹은 뒤에 요소를 추가
    // beforebegin 특정 노드 앞
    // afterbegin 가장 첫 번째 자식
    // beforeend 가장 마지막 자식
    // afterend 특정 노드 뒤

    // 자식으로 추가하느냐 해당 요소의 앞과 뒤냐
    //
});
