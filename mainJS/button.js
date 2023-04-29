// tab menu
const menubtn = document.querySelectorAll(".menu-btn");
const contentTab = document.querySelectorAll(".content");

// side menu title filter
const siListBtn = document.querySelectorAll(".side-list-title");
const sideIconRol = document.querySelectorAll(".side-list-title i");
const listUl = document.querySelectorAll(".list-ul");

// Tai them button
const LoadMoreItem = document.querySelectorAll(".loadMore");
const loadBtn = document.querySelectorAll(".more-item-btn");

// input search
const keySearch = document.getElementById("ser-input");
// hien danh sach tim kiem
const infoSearch = document.querySelector(".info-search");
// nut tim kiem
const searchBtn = document.querySelector("#search-btn");
const searchMoreBtn = document.querySelector("#search-more-btn");

//  the hieu ung load
const loadList = document.querySelectorAll(".loadList");

// dem so ket qua
const species_count = document.querySelectorAll(".count");
// btn sap xep
const sort = document.getElementById("sortItem");
// export Excel
const exportBtn = document.querySelector("#importExcel");

const ListBtn = {
  menubtn: menubtn,
  contentTab: contentTab,
  siListBtn: siListBtn,
  sideIconRol: sideIconRol,
  listUl: listUl,
  LoadMoreItem: LoadMoreItem,
  loadBtn: loadBtn,
  keySearch: keySearch,
  infoSearch: infoSearch,
  searchBtn: searchBtn,
  loadList: loadList,
  species_count: species_count,
  sort: sort,
  exportBtn: exportBtn,
  searchMoreBtn: searchMoreBtn,
};

export default ListBtn;
