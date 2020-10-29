<template>
  <div id="mainContent">
    <div class="boxContent">
      <div id="community" class="community">
        <div class="backgroundDark">
          <div class="container">
            <ul id="pills-tab" role="tablist" class="nav nav-pills menuHeaderLink">
              <li id="community" class="nav-item">
                <a
                  href="/user/copytrade/community"
                  class="nav-link router-link-exact-active router-link-active"
                  >Cộng đồng</a
                >
              </li>
              <li id="portfolio" class="nav-item">
                <router-link 
                to="/portfolit"
                tag="a" 
                class="nav-link"
                  >Danh mục</router-link>
              </li>
              <li id="expertArea" class="nav-item">
                <a href="/user/copytrade/expert-area" class="nav-link"
                  >Chuyên gia</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="page">
          <div class="banner">
            <div class="backgroundBanner"></div>
            <div class="title">Sao chép giao dịch</div>
            <div class="subText">
              Kiếm lợi nhuận thụ động bằng việc sao chép giao dịch cùng các
              chuyên gia
            </div>
          </div>
          <div class="pageContent">
            <div class="container">
              <div class="row">
                <div class="col-lg-4">
                  <div class="control">
                    <div class="controlBox">
                      <label class="controlText">Lọc theo điều kiện</label>
                      <div class="d-flex">
                        <div class="btnControl left active">
                          Lợi nhuận hàng đầu
                        </div>
                        <div class="btnControl">Phổ biến nhất</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 offset-lg-3">
                  <div class="control">
                    <div class="search">
                      <label class="searchText">Tìm chuyên gia</label>
                      <div class="searchBox d-flex align-items-center">
                        <div class="searchValue">
                          <input placeholder="Biệt danh" class="inputSearch" />
                          <!---->
                        </div>
                        <div class="btnSearch">Tìm kiếm</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row communityList">
                <div class="loading">
                  <div class="loading__ring">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      version="1.1"
                      x="0px"
                      y="0px"
                      viewBox="0 0 100 100"
                      style="enable-background: new 0 0 100 100"
                      xml:space="preserve"
                    >
                      <path
                        d="M85.5,42c-0.2-0.8-0.5-1.7-0.8-2.5c-0.3-0.9-0.7-1.6-1-2.3c-0.3-0.7-0.6-1.3-1-1.9c0.3,0.5,0.5,1.1,0.8,1.7  c0.2,0.7,0.6,1.5,0.8,2.3s0.5,1.7,0.8,2.5c0.8,3.5,1.3,7.5,0.8,12c-0.4,4.3-1.8,9-4.2,13.4c-2.4,4.2-5.9,8.2-10.5,11.2  c-1.1,0.7-2.2,1.5-3.4,2c-0.5,0.2-1.2,0.6-1.8,0.8s-1.3,0.5-1.9,0.8c-2.6,1-5.3,1.7-8.1,1.8l-1.1,0.1L53.8,84c-0.7,0-1.4,0-2.1,0  c-1.4-0.1-2.9-0.1-4.2-0.5c-1.4-0.1-2.8-0.6-4.1-0.8c-1.4-0.5-2.7-0.9-3.9-1.5c-1.2-0.6-2.4-1.2-3.7-1.9c-0.6-0.3-1.2-0.7-1.7-1.1  l-0.8-0.6c-0.3-0.1-0.6-0.4-0.8-0.6l-0.8-0.6L31.3,76l-0.2-0.2L31,75.7l-0.1-0.1l0,0l-1.5-1.5c-1.2-1-1.9-2.1-2.7-3.1  c-0.4-0.4-0.7-1.1-1.1-1.7l-1.1-1.7c-0.3-0.6-0.6-1.2-0.9-1.8c-0.2-0.5-0.6-1.2-0.8-1.8c-0.4-1.2-1-2.4-1.2-3.7  c-0.2-0.6-0.4-1.2-0.5-1.9c-0.1-0.6-0.2-1.2-0.3-1.8c-0.3-1.2-0.3-2.4-0.4-3.7c-0.1-1.2,0-2.5,0.1-3.7c0.2-1.2,0.3-2.4,0.6-3.5  c0.1-0.6,0.3-1.1,0.4-1.7l0.1-0.8l0.3-0.8c1.5-4.3,3.8-8,6.5-11c0.8-0.8,1.4-1.5,2.1-2.1c0.9-0.9,1.4-1.3,2.2-1.8  c1.4-1.2,2.9-2,4.3-2.8c2.8-1.5,5.5-2.3,7.7-2.8s4-0.7,5.2-0.6c0.6-0.1,1.1,0,1.4,0s0.4,0,0.4,0h0.1c2.7,0.1,5-2.2,5-5  c0.1-2.7-2.2-5-5-5c-0.2,0-0.2,0-0.3,0c0,0-0.2,0.1-0.6,0.1c-0.4,0-1,0-1.8,0.1c-1.6,0.1-4,0.4-6.9,1.2c-2.9,0.8-6.4,2-9.9,4.1  c-1.8,1-3.6,2.3-5.4,3.8C26,21.4,25,22.2,24.4,23c-0.2,0.2-0.4,0.4-0.6,0.6c-0.2,0.2-0.5,0.4-0.6,0.7c-0.5,0.4-0.8,0.9-1.3,1.4  c-3.2,3.9-5.9,8.8-7.5,14.3l-0.3,1l-0.2,1.1c-0.1,0.7-0.3,1.4-0.4,2.1c-0.3,1.5-0.4,2.9-0.5,4.5c0,1.5-0.1,3,0.1,4.5  c0.2,1.5,0.2,3,0.6,4.6c0.1,0.7,0.3,1.5,0.4,2.3c0.2,0.8,0.5,1.5,0.7,2.3c0.4,1.6,1.1,3,1.7,4.4c0.3,0.7,0.7,1.4,1.1,2.1  c0.4,0.8,0.8,1.4,1.2,2.1c0.5,0.7,0.9,1.4,1.4,2s0.9,1.3,1.5,1.9c1.1,1.3,2.2,2.7,3.3,3.5l1.7,1.6c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0  c0,0,0,0,0,0l0.1,0.1l0.1,0.1h0.2l0.5,0.4l1,0.7c0.4,0.2,0.6,0.5,1,0.7l1.1,0.6c0.8,0.4,1.4,0.9,2.1,1.2c1.4,0.7,2.9,1.5,4.4,2  c1.5,0.7,3.1,1,4.6,1.5c1.5,0.3,3.1,0.7,4.7,0.8c1.6,0.2,3.1,0.2,4.7,0.2c0.8,0,1.6-0.1,2.4-0.1l1.2-0.1l1.1-0.1  c3.1-0.4,6.1-1.3,8.9-2.4c0.8-0.3,1.4-0.6,2.1-0.9s1.3-0.7,2-1.1c1.3-0.7,2.6-1.7,3.7-2.5c0.5-0.4,1-0.9,1.6-1.3l0.8-0.6l0.2-0.2  c0,0,0.1-0.1,0.1-0.1c0.1-0.1,0,0,0,0v0.1l0.1-0.1l0.4-0.4c0.5-0.5,1-1,1.5-1.5c0.3-0.3,0.5-0.5,0.8-0.8l0.7-0.8  c0.9-1.1,1.8-2.2,2.5-3.3c0.4-0.6,0.7-1.1,1.1-1.7c0.3-0.7,0.6-1.2,0.9-1.8c2.4-4.9,3.5-9.8,3.7-14.4C87.3,49.7,86.6,45.5,85.5,42z"
                      ></path>
                    </svg>
                  </div>
                  <div class="loading__ring">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      version="1.1"
                      x="0px"
                      y="0px"
                      viewBox="0 0 100 100"
                      style="enable-background: new 0 0 100 100"
                      xml:space="preserve"
                    >
                      <path
                        d="M85.5,42c-0.2-0.8-0.5-1.7-0.8-2.5c-0.3-0.9-0.7-1.6-1-2.3c-0.3-0.7-0.6-1.3-1-1.9c0.3,0.5,0.5,1.1,0.8,1.7  c0.2,0.7,0.6,1.5,0.8,2.3s0.5,1.7,0.8,2.5c0.8,3.5,1.3,7.5,0.8,12c-0.4,4.3-1.8,9-4.2,13.4c-2.4,4.2-5.9,8.2-10.5,11.2  c-1.1,0.7-2.2,1.5-3.4,2c-0.5,0.2-1.2,0.6-1.8,0.8s-1.3,0.5-1.9,0.8c-2.6,1-5.3,1.7-8.1,1.8l-1.1,0.1L53.8,84c-0.7,0-1.4,0-2.1,0  c-1.4-0.1-2.9-0.1-4.2-0.5c-1.4-0.1-2.8-0.6-4.1-0.8c-1.4-0.5-2.7-0.9-3.9-1.5c-1.2-0.6-2.4-1.2-3.7-1.9c-0.6-0.3-1.2-0.7-1.7-1.1  l-0.8-0.6c-0.3-0.1-0.6-0.4-0.8-0.6l-0.8-0.6L31.3,76l-0.2-0.2L31,75.7l-0.1-0.1l0,0l-1.5-1.5c-1.2-1-1.9-2.1-2.7-3.1  c-0.4-0.4-0.7-1.1-1.1-1.7l-1.1-1.7c-0.3-0.6-0.6-1.2-0.9-1.8c-0.2-0.5-0.6-1.2-0.8-1.8c-0.4-1.2-1-2.4-1.2-3.7  c-0.2-0.6-0.4-1.2-0.5-1.9c-0.1-0.6-0.2-1.2-0.3-1.8c-0.3-1.2-0.3-2.4-0.4-3.7c-0.1-1.2,0-2.5,0.1-3.7c0.2-1.2,0.3-2.4,0.6-3.5  c0.1-0.6,0.3-1.1,0.4-1.7l0.1-0.8l0.3-0.8c1.5-4.3,3.8-8,6.5-11c0.8-0.8,1.4-1.5,2.1-2.1c0.9-0.9,1.4-1.3,2.2-1.8  c1.4-1.2,2.9-2,4.3-2.8c2.8-1.5,5.5-2.3,7.7-2.8s4-0.7,5.2-0.6c0.6-0.1,1.1,0,1.4,0s0.4,0,0.4,0h0.1c2.7,0.1,5-2.2,5-5  c0.1-2.7-2.2-5-5-5c-0.2,0-0.2,0-0.3,0c0,0-0.2,0.1-0.6,0.1c-0.4,0-1,0-1.8,0.1c-1.6,0.1-4,0.4-6.9,1.2c-2.9,0.8-6.4,2-9.9,4.1  c-1.8,1-3.6,2.3-5.4,3.8C26,21.4,25,22.2,24.4,23c-0.2,0.2-0.4,0.4-0.6,0.6c-0.2,0.2-0.5,0.4-0.6,0.7c-0.5,0.4-0.8,0.9-1.3,1.4  c-3.2,3.9-5.9,8.8-7.5,14.3l-0.3,1l-0.2,1.1c-0.1,0.7-0.3,1.4-0.4,2.1c-0.3,1.5-0.4,2.9-0.5,4.5c0,1.5-0.1,3,0.1,4.5  c0.2,1.5,0.2,3,0.6,4.6c0.1,0.7,0.3,1.5,0.4,2.3c0.2,0.8,0.5,1.5,0.7,2.3c0.4,1.6,1.1,3,1.7,4.4c0.3,0.7,0.7,1.4,1.1,2.1  c0.4,0.8,0.8,1.4,1.2,2.1c0.5,0.7,0.9,1.4,1.4,2s0.9,1.3,1.5,1.9c1.1,1.3,2.2,2.7,3.3,3.5l1.7,1.6c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0  c0,0,0,0,0,0l0.1,0.1l0.1,0.1h0.2l0.5,0.4l1,0.7c0.4,0.2,0.6,0.5,1,0.7l1.1,0.6c0.8,0.4,1.4,0.9,2.1,1.2c1.4,0.7,2.9,1.5,4.4,2  c1.5,0.7,3.1,1,4.6,1.5c1.5,0.3,3.1,0.7,4.7,0.8c1.6,0.2,3.1,0.2,4.7,0.2c0.8,0,1.6-0.1,2.4-0.1l1.2-0.1l1.1-0.1  c3.1-0.4,6.1-1.3,8.9-2.4c0.8-0.3,1.4-0.6,2.1-0.9s1.3-0.7,2-1.1c1.3-0.7,2.6-1.7,3.7-2.5c0.5-0.4,1-0.9,1.6-1.3l0.8-0.6l0.2-0.2  c0,0,0.1-0.1,0.1-0.1c0.1-0.1,0,0,0,0v0.1l0.1-0.1l0.4-0.4c0.5-0.5,1-1,1.5-1.5c0.3-0.3,0.5-0.5,0.8-0.8l0.7-0.8  c0.9-1.1,1.8-2.2,2.5-3.3c0.4-0.6,0.7-1.1,1.1-1.7c0.3-0.7,0.6-1.2,0.9-1.8c2.4-4.9,3.5-9.8,3.7-14.4C87.3,49.7,86.6,45.5,85.5,42z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div class="col-12 col-lg-6 col-xl-4">
                  <div class="communityItem">
                    <div class="boxProfile">
                      <div class="headerBox d-flex">
                        <img
                          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgdmlld0JveD0iMCAwIDgwIDgwIj4KICA8ZyBpZD0iR3JvdXBfMjA5OTgiIGRhdGEtbmFtZT0iR3JvdXAgMjA5OTgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMzg5IC0wLjQ0MykiPgogICAgPGcgaWQ9Ikdyb3VwXzIwOTg2IiBkYXRhLW5hbWU9Ikdyb3VwIDIwOTg2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC4zODkpIj4KICAgICAgPGcgaWQ9Ikdyb3VwXzIwOTgyIiBkYXRhLW5hbWU9Ikdyb3VwIDIwOTgyIj4KICAgICAgICA8Y2lyY2xlIGlkPSJFbGxpcHNlXzE5MTgiIGRhdGEtbmFtZT0iRWxsaXBzZSAxOTE4IiBjeD0iNDAiIGN5PSI0MCIgcj0iNDAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMC40NDMpIiBmaWxsPSIjZWNmNGZmIi8+CiAgICAgIDwvZz4KICAgICAgPGcgaWQ9Ikdyb3VwXzIwOTgzIiBkYXRhLW5hbWU9Ikdyb3VwIDIwOTgzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4LjM0OCA3Ljg3NCkiPgogICAgICAgIDxwYXRoIGlkPSJQYXRoXzM0ODg1IiBkYXRhLW5hbWU9IlBhdGggMzQ4ODUiIGQ9Ik0xMDYuMzM1LDUwLjc1OWEzOS43MTQsMzkuNzE0LDAsMCwxLTU1LjU3Niw1NS41NzYsMzkuNzEzLDM5LjcxMywwLDEsMCw1NS41NzYtNTUuNTc2WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTUwLjc1OSAtNTAuNzU5KSIgZmlsbD0iI2RkZWFmYiIvPgogICAgICA8L2c+CiAgICAgIDxnIGlkPSJHcm91cF8yMDk4NCIgZGF0YS1uYW1lPSJHcm91cCAyMDk4NCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOS45MDYgNTIuNzI2KSI+CiAgICAgICAgPHBhdGggaWQ9IlBhdGhfMzQ4ODYiIGRhdGEtbmFtZT0iUGF0aCAzNDg4NiIgZD0iTTEyMS4zNjUsMzUyLjU3OUEyMC45NDUsMjAuOTQ1LDAsMCwwLDEwMi4xMTksMzM5LjlIODAuMDU0YTIwLjk0NSwyMC45NDUsMCwwLDAtMTkuMjQ2LDEyLjY3NiwzOS43MDUsMzkuNzA1LDAsMCwwLDYwLjU1NywwWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTYwLjgwOCAtMzM5LjkwMykiIGZpbGw9IiM1MjQ3OTgiLz4KICAgICAgPC9nPgogICAgICA8ZyBpZD0iR3JvdXBfMjA5ODUiIGRhdGEtbmFtZT0iR3JvdXAgMjA5ODUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDkuOTA2IDU2LjQyMSkiPgogICAgICAgIDxwYXRoIGlkPSJQYXRoXzM0ODg3IiBkYXRhLW5hbWU9IlBhdGggMzQ4ODciIGQ9Ik0xMjEuMzY1LDM3Mi43YTIxLjAxOSwyMS4wMTksMCwwLDAtNy4zNy04Ljk4MUEzOS43MTcsMzkuNzE3LDAsMCwxLDYxLjEsMzcyLjA1MmMtLjEuMjE1LS4yLjQzMS0uMjk0LjY1YTM5LjcwNSwzOS43MDUsMCwwLDAsNjAuNTU3LDBaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjAuODA4IC0zNjMuNzIxKSIgZmlsbD0iIzQ1M2Q4MSIvPgogICAgICA8L2c+CiAgICA8L2c+CiAgICA8ZyBpZD0iR3JvdXBfMjA5ODciIGRhdGEtbmFtZT0iR3JvdXAgMjA5ODciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI1LjM5MyA3Ljg2MikiPgogICAgICA8cGF0aCBpZD0iUGF0aF8zNDg4OCIgZGF0YS1uYW1lPSJQYXRoIDM0ODg4IiBkPSJNMTkxLjQsNTUuODE1bC0zLjUwOS0zLjMzNmE2LjUyNCw2LjUyNCwwLDAsMC02LjU5NS0xLjQ0OWwtMTIuNjA2LDQuMjg1YTguMTY1LDguMTY1LDAsMCwwLTUuNTM3LDcuNzMxdjUuODQybC42MjEsMS44MTRoMjguNDU5bC42Mi0xLjgxNFY1OS4yQTQuNjc2LDQuNjc2LDAsMCwwLDE5MS40LDU1LjgxNVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNjMuMTQ5IC01MC42ODIpIiBmaWxsPSIjZmZkMDY0Ii8+CiAgICA8L2c+CiAgICA8ZyBpZD0iR3JvdXBfMjA5ODgiIGRhdGEtbmFtZT0iR3JvdXAgMjA5ODgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM4Ljc0OSA3Ljg2MikiPgogICAgICA8cGF0aCBpZD0iUGF0aF8zNDg4OSIgZGF0YS1uYW1lPSJQYXRoIDM0ODg5IiBkPSJNMjY0LjE0LDU1LjgxNWwtMy41MDktMy4zMzZhNi41MjQsNi41MjQsMCwwLDAtNi41OTUtMS40NDlsLTQuNzg3LDEuNjI3YTYuNTIyLDYuNTIyLDAsMCwxLDMuOTQ4LDEuNzcybDMuNTA5LDMuMzM2YTQuNjc1LDQuNjc1LDAsMCwxLDEuNDU0LDMuMzg4VjcwLjdoNi44MTRsLjYyLTEuODE0VjU5LjJhNC42NzYsNC42NzYsMCwwLDAtMS40NTQtMy4zODhaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjQ5LjI0OSAtNTAuNjgyKSIgZmlsbD0iI2ZmYzI1MCIvPgogICAgPC9nPgogICAgPGcgaWQ9Ikdyb3VwXzIwOTg5IiBkYXRhLW5hbWU9Ikdyb3VwIDIwOTg5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1Mi45ODggMjguMTk1KSI+CiAgICAgIDxwYXRoIGlkPSJQYXRoXzM0ODkwIiBkYXRhLW5hbWU9IlBhdGggMzQ4OTAiIGQ9Ik0zNDIuMiwxODQuOTY1Yy0xLjUyMiwzLjIzMS0xLjY1Myw3LjUyNy4yNTgsOC40MjdzNS4xMzktMS45MzgsNi42NjEtNS4xNjkuNTM4LTUuMTYxLTEuMzcyLTYuMDYxUzM0My43MjEsMTgxLjczNCwzNDIuMiwxODQuOTY1WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTM0MS4wNCAtMTgxLjc2KSIgZmlsbD0iI2ZmY2JiZSIvPgogICAgPC9nPgogICAgPGcgaWQ9Ikdyb3VwXzIwOTkwIiBkYXRhLW5hbWU9Ikdyb3VwIDIwOTkwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyOS44MjUgNDMuNjQ4KSI+CiAgICAgIDxwYXRoIGlkPSJQYXRoXzM0ODkxIiBkYXRhLW5hbWU9IlBhdGggMzQ4OTEiIGQ9Ik0yMDMuOTU0LDI5OS40NTdoLTMuNjMzYTguNiw4LjYsMCwwLDEtOC42LTguNlYyODEuMzhoMjAuODM2djkuNDc2QTguNiw4LjYsMCwwLDEsMjAzLjk1NCwyOTkuNDU3WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE5MS43MTkgLTI4MS4zOCkiIGZpbGw9IiNlYWFjOWQiLz4KICAgIDwvZz4KICAgIDxwYXRoIGlkPSJQYXRoXzM0ODkyIiBkYXRhLW5hbWU9IlBhdGggMzQ4OTIiIGQ9Ik0yNDUuNTgyLDI4MS4zOHY5LjQ3NmE4LjYsOC42LDAsMCwxLTcuMjMzLDguNDkyLDguNjY4LDguNjY4LDAsMCwwLDEuMzY4LjExaDMuNjMzYTguNiw4LjYsMCwwLDAsOC42LTguNlYyODEuMzhaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjAxLjI5MSAtMjM3LjczMikiIGZpbGw9IiNkZjkzODAiLz4KICAgIDxnIGlkPSJHcm91cF8yMDk5MSIgZGF0YS1uYW1lPSJHcm91cCAyMDk5MSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjUuMzkzIDIzLjM2OSkiPgogICAgICA8cGF0aCBpZD0iUGF0aF8zNDg5MyIgZGF0YS1uYW1lPSJQYXRoIDM0ODkzIiBkPSJNMTkwLjE1LDE1MC42NTNIMTY1Ljg0NGEyLjcsMi43LDAsMCwwLTIuNywyLjd2OS42YTE1LjY5MywxNS42OTMsMCwwLDAsNi45MzksMTMuMDI1bDQuMzE2LDIuOWE2LjQ0Niw2LjQ0NiwwLDAsMCwxLjM4Ny43MDYsMjEuMTcyLDIxLjE3MiwwLDAsMCwzLjAyOS0uMDQ5LDE1LjQ4NiwxNS40ODYsMCwwLDAsMy4yMjgtLjk2MmwzLjg2My0yLjZhMTUuNjkzLDE1LjY5MywwLDAsMCw2LjkzOS0xMy4wMjV2LTkuNmEyLjcsMi43LDAsMCwwLTIuNy0yLjdaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTYzLjE0NyAtMTUwLjY1MykiIGZpbGw9IiNmZmNiYmUiLz4KICAgIDwvZz4KICAgIDxnIGlkPSJHcm91cF8yMDk5MiIgZGF0YS1uYW1lPSJHcm91cCAyMDk5MiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzguMDM1IDIzLjM2OSkiPgogICAgICA8cGF0aCBpZD0iUGF0aF8zNDg5NCIgZGF0YS1uYW1lPSJQYXRoIDM0ODk0IiBkPSJNMjU3LjI4OSwxNTAuNjUydjEyLjNhMTUuNjk0LDE1LjY5NCwwLDAsMS02LjkzOSwxMy4wMjVsLTQuMzE2LDIuOWE2LjQ1NSw2LjQ1NSwwLDAsMS0xLjM4OS43MDYsNi40NDcsNi40NDcsMCwwLDAsNS44LS43MDZsNC4zMTYtMi45YTE1LjY5MywxNS42OTMsMCwwLDAsNi45MzktMTMuMDI1di05LjZhMi43LDIuNywwLDAsMC0yLjctMi43aC0xLjcxN1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yNDQuNjQ1IC0xNTAuNjUyKSIgZmlsbD0iI2VhYWM5ZCIvPgogICAgPC9nPgogICAgPGcgaWQ9Ikdyb3VwXzIwOTkzIiBkYXRhLW5hbWU9Ikdyb3VwIDIwOTkzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1Mi45ODggMjguMTk1KSI+CiAgICAgIDxwYXRoIGlkPSJQYXRoXzM0ODk1IiBkYXRhLW5hbWU9IlBhdGggMzQ4OTUiIGQ9Ik0zNDIuMiwxODQuOTY1Yy0xLjUyMiwzLjIzMS0xLjY1Myw3LjUyNy4yNTgsOC40MjdzNS4xMzktMS45MzgsNi42NjEtNS4xNjkuNTM4LTUuMTYxLTEuMzcyLTYuMDYxUzM0My43MjEsMTgxLjczNCwzNDIuMiwxODQuOTY1WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTM0MS4wNCAtMTgxLjc2KSIgZmlsbD0iI2VhYWM5ZCIvPgogICAgPC9nPgogICAgPGcgaWQ9Ikdyb3VwXzIwOTk0IiBkYXRhLW5hbWU9Ikdyb3VwIDIwOTk0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxOC42NzYgMjguMTk1KSI+CiAgICAgIDxwYXRoIGlkPSJQYXRoXzM0ODk2IiBkYXRhLW5hbWU9IlBhdGggMzQ4OTYiIGQ9Ik0xMjcuNTA5LDE4NC45NjVjMS41MjIsMy4yMzEsMS42NTMsNy41MjctLjI1OCw4LjQyN3MtNS4xMzktMS45MzgtNi42NjEtNS4xNjktLjUzOC01LjE2MSwxLjM3Mi02LjA2MVMxMjUuOTg3LDE4MS43MzQsMTI3LjUwOSwxODQuOTY1WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTExOS44NDUgLTE4MS43NikiIGZpbGw9IiNmZmNiYmUiLz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPgo="
                          width="84"
                          height="84"
                          class="avatar"
                        />
                        <div class="profile align-self-center w-100">
                          <p class="name mb-2">Thienkim15</p>
                          <div class="d-flex w-100">
                            <div class="label orange mr-2">
                              <div class="d-flex align-items-center">
                                <img
                                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTMuNDAxIiBoZWlnaHQ9IjEzLjQwMSIgdmlld0JveD0iMCAwIDEzLjQwMSAxMy40MDEiPgogIDxkZWZzPgogICAgPGNsaXBQYXRoIGlkPSJjbGlwLXBhdGgiPgogICAgICA8cGF0aCBpZD0iUGF0aF8zNDUzNyIgZGF0YS1uYW1lPSJQYXRoIDM0NTM3IiBkPSJNMCwwSDEzLjRWMTMuNEgwWiIgZmlsbD0iI2ZmZiIvPgogICAgPC9jbGlwUGF0aD4KICA8L2RlZnM+CiAgPGcgaWQ9Im1hc3Rlci1leHBlcmllbmNlXzUiIGNsaXAtcGF0aD0idXJsKCNjbGlwLXBhdGgpIj4KICAgIDxwYXRoIGlkPSJQYXRoXzM0NTM2IiBkYXRhLW5hbWU9IlBhdGggMzQ1MzYiIGQ9Ik03LjE1MywzLjEsNy43LDQuODU0YS40OTEuNDkxLDAsMCwwLC40Ni4zNWgxLjc3YS41MS41MSwwLDAsMSwuMjgzLjkxNkw4Ljc4Miw3LjIwNmEuNTI1LjUyNSwwLDAsMC0uMTc5LjU2NmwuNTQzLDEuNzU3YS40ODkuNDg5LDAsMCwxLS43NDQuNTY2TDYuOTc1LDkuMDA4YS40NzkuNDc5LDAsMCwwLS41NzMsMGwtMS40MiwxLjA4N2EuNDg4LjQ4OCwwLDAsMS0uNzQ0LS41NjZsLjU0My0xLjc1N0EuNTE0LjUxNCwwLDAsMCw0LjYsNy4yMDZMMy4xNzUsNi4xMTlBLjUxLjUxLDAsMCwxLDMuNDU4LDUuMmgxLjc3YS40OTIuNDkyLDAsMCwwLC40NjItLjM1TDYuMjMxLDMuMWEuNDc4LjQ3OCwwLDAsMSwuOTIyLDBaTTIuOTc0LDkuODI1QTUuOTQzLDUuOTQzLDAsMCwxLDIuMjgyLDguNDEsMS41NDIsMS41NDIsMCwwLDAsLjgxOCw3LjM1M0gwQTguMjUsOC4yNSwwLDAsMCwuNDMxLDkuMjgxYTEuNSwxLjUsMCwwLDAsMi41NDMuNTQzWk0xMS4xLDguNDFhNS45NjksNS45NjksMCwwLDEtLjY5MiwxLjQxNSwxLjUsMS41LDAsMCwwLDIuNTQ0LS41NDMsOC4yNDksOC4yNDksMCwwLDAsLjQzMS0xLjkyOGgtLjgxOUExLjU0OSwxLjU0OSwwLDAsMCwxMS4xLDguNDFaTTUuOTQ5LDExLjY2M2E1LjE5Myw1LjE5MywwLDAsMS0xLjQyLS40NTQsMS40NjYsMS40NjYsMCwwLDAtMS43LjM1bC0uNTk1LjYxOGE3LjIxLDcuMjEsMCwwLDAsMS41NDcuOTksMS41NjgsMS41NjgsMCwwLDAsMi4xNzItMS41Wm0yLjkwNy0uNDU0YTUuMiw1LjIsMCwwLDEtMS40Mi40NTQsMS41NjQsMS41NjQsMCwwLDAsMi4xNjQsMS41LDcuMDE0LDcuMDE0LDAsMCwwLDEuNTQ3LS45OWwtLjYtLjYxOEExLjQ1MSwxLjQ1MSwwLDAsMCw4Ljg1NywxMS4yMDlabTIuNDYyLTYuODQyYTUuNzY5LDUuNzY5LDAsMCwxLC41MDYsMS40ODksMS40OTQsMS40OTQsMCwwLDAsMS40MTMtMi4xODEsOC42NDUsOC42NDUsMCwwLDAtMS4wNTYtMS42NjhsLS41OC41NzNhMS41NjUsMS41NjUsMCwwLDAtLjI4MywxLjc4N1ptLTkuMjI5LDBhNS42NjgsNS42NjgsMCwwLDAtLjUxMywxLjQ4OUExLjQ5NCwxLjQ5NCwwLDAsMSwuMTYzLDMuNjc1LDguNjY1LDguNjY1LDAsMCwxLDEuMjIsMmwuNTguNTgxYTEuNTU1LDEuNTU1LDAsMCwxLC4yOSwxLjc4N1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAxIC0wLjUxMSkiIGZpbGw9IiNmZmYiLz4KICA8L2c+Cjwvc3ZnPgo="
                                  class="mr-2"
                                />
                                <span>Chuyên gia</span>
                              </div>
                            </div>
                            <!---->
                          </div>
                        </div>
                      </div>
                      <div class="bodyBox mb-015rem numberContent">
                        <div class="d-flex w-100">
                          <div class="flexBox">
                            <p class="number gain green">95%</p>
                            <p class="title">Lợi nhuận (30N)</p>
                          </div>
                          <div class="flexBox">
                            <p class="number">0</p>
                            <p class="title">Người sao chép</p>
                          </div>
                          <div class="flexBox">
                            <p class="number">5%</p>
                            <p class="title">Chia sẻ ln</p>
                          </div>
                        </div>
                      </div>
                      <div class="bodyBox">
                        <button
                          class="btn btn-secondary startCopy w-100 d-flex align-items-center justify-content-center disabled"
                        >
                          <img
                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOS4wNTciIGhlaWdodD0iMTkuMDU3IiB2aWV3Qm94PSIwIDAgMTkuMDU3IDE5LjA1NyI+CiAgPHBhdGggaWQ9IlBhdGhfMzQ1NDkiIGRhdGEtbmFtZT0iUGF0aCAzNDU0OSIgZD0iTTExLjUyOCwyYTkuNTI4LDkuNTI4LDAsMSwwLDkuNTI4LDkuNTI4QTkuNTI4LDkuNTI4LDAsMCwwLDExLjUyOCwyWm00LjkyMyw5LjhMOC44MjksMTYuMjQ5YS4zMTguMzE4LDAsMCwxLS40NzYtLjI3NFY3LjA4MmEuMzE4LjMxOCwwLDAsMSwuNDc2LS4yNzRsNy42MjMsNC40NDdhLjMxOC4zMTgsMCwwLDEsMCwuNTQ5WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIgLTIpIiBmaWxsPSIjZmZmIi8+Cjwvc3ZnPgo="
                          />
                          <span class="ml-2">Bắt đầu sao chép</span>
                        </button>
                      </div>
                      <div class="footerBox">
                        <p class="mb-0">
                          <span class="text mr-1">Đầu tư tối thiểu</span
                          ><span class="number">$10,000.00</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-lg-6 col-xl-4">
                  <div class="communityItem">
                    <div class="boxProfile">
                      <div class="headerBox d-flex">
                        <img
                          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgdmlld0JveD0iMCAwIDgwIDgwIj4KICA8ZyBpZD0iR3JvdXBfMjA5OTgiIGRhdGEtbmFtZT0iR3JvdXAgMjA5OTgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMzg5IC0wLjQ0MykiPgogICAgPGcgaWQ9Ikdyb3VwXzIwOTg2IiBkYXRhLW5hbWU9Ikdyb3VwIDIwOTg2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC4zODkpIj4KICAgICAgPGcgaWQ9Ikdyb3VwXzIwOTgyIiBkYXRhLW5hbWU9Ikdyb3VwIDIwOTgyIj4KICAgICAgICA8Y2lyY2xlIGlkPSJFbGxpcHNlXzE5MTgiIGRhdGEtbmFtZT0iRWxsaXBzZSAxOTE4IiBjeD0iNDAiIGN5PSI0MCIgcj0iNDAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMC40NDMpIiBmaWxsPSIjZWNmNGZmIi8+CiAgICAgIDwvZz4KICAgICAgPGcgaWQ9Ikdyb3VwXzIwOTgzIiBkYXRhLW5hbWU9Ikdyb3VwIDIwOTgzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4LjM0OCA3Ljg3NCkiPgogICAgICAgIDxwYXRoIGlkPSJQYXRoXzM0ODg1IiBkYXRhLW5hbWU9IlBhdGggMzQ4ODUiIGQ9Ik0xMDYuMzM1LDUwLjc1OWEzOS43MTQsMzkuNzE0LDAsMCwxLTU1LjU3Niw1NS41NzYsMzkuNzEzLDM5LjcxMywwLDEsMCw1NS41NzYtNTUuNTc2WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTUwLjc1OSAtNTAuNzU5KSIgZmlsbD0iI2RkZWFmYiIvPgogICAgICA8L2c+CiAgICAgIDxnIGlkPSJHcm91cF8yMDk4NCIgZGF0YS1uYW1lPSJHcm91cCAyMDk4NCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOS45MDYgNTIuNzI2KSI+CiAgICAgICAgPHBhdGggaWQ9IlBhdGhfMzQ4ODYiIGRhdGEtbmFtZT0iUGF0aCAzNDg4NiIgZD0iTTEyMS4zNjUsMzUyLjU3OUEyMC45NDUsMjAuOTQ1LDAsMCwwLDEwMi4xMTksMzM5LjlIODAuMDU0YTIwLjk0NSwyMC45NDUsMCwwLDAtMTkuMjQ2LDEyLjY3NiwzOS43MDUsMzkuNzA1LDAsMCwwLDYwLjU1NywwWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTYwLjgwOCAtMzM5LjkwMykiIGZpbGw9IiM1MjQ3OTgiLz4KICAgICAgPC9nPgogICAgICA8ZyBpZD0iR3JvdXBfMjA5ODUiIGRhdGEtbmFtZT0iR3JvdXAgMjA5ODUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDkuOTA2IDU2LjQyMSkiPgogICAgICAgIDxwYXRoIGlkPSJQYXRoXzM0ODg3IiBkYXRhLW5hbWU9IlBhdGggMzQ4ODciIGQ9Ik0xMjEuMzY1LDM3Mi43YTIxLjAxOSwyMS4wMTksMCwwLDAtNy4zNy04Ljk4MUEzOS43MTcsMzkuNzE3LDAsMCwxLDYxLjEsMzcyLjA1MmMtLjEuMjE1LS4yLjQzMS0uMjk0LjY1YTM5LjcwNSwzOS43MDUsMCwwLDAsNjAuNTU3LDBaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjAuODA4IC0zNjMuNzIxKSIgZmlsbD0iIzQ1M2Q4MSIvPgogICAgICA8L2c+CiAgICA8L2c+CiAgICA8ZyBpZD0iR3JvdXBfMjA5ODciIGRhdGEtbmFtZT0iR3JvdXAgMjA5ODciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI1LjM5MyA3Ljg2MikiPgogICAgICA8cGF0aCBpZD0iUGF0aF8zNDg4OCIgZGF0YS1uYW1lPSJQYXRoIDM0ODg4IiBkPSJNMTkxLjQsNTUuODE1bC0zLjUwOS0zLjMzNmE2LjUyNCw2LjUyNCwwLDAsMC02LjU5NS0xLjQ0OWwtMTIuNjA2LDQuMjg1YTguMTY1LDguMTY1LDAsMCwwLTUuNTM3LDcuNzMxdjUuODQybC42MjEsMS44MTRoMjguNDU5bC42Mi0xLjgxNFY1OS4yQTQuNjc2LDQuNjc2LDAsMCwwLDE5MS40LDU1LjgxNVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNjMuMTQ5IC01MC42ODIpIiBmaWxsPSIjZmZkMDY0Ii8+CiAgICA8L2c+CiAgICA8ZyBpZD0iR3JvdXBfMjA5ODgiIGRhdGEtbmFtZT0iR3JvdXAgMjA5ODgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM4Ljc0OSA3Ljg2MikiPgogICAgICA8cGF0aCBpZD0iUGF0aF8zNDg4OSIgZGF0YS1uYW1lPSJQYXRoIDM0ODg5IiBkPSJNMjY0LjE0LDU1LjgxNWwtMy41MDktMy4zMzZhNi41MjQsNi41MjQsMCwwLDAtNi41OTUtMS40NDlsLTQuNzg3LDEuNjI3YTYuNTIyLDYuNTIyLDAsMCwxLDMuOTQ4LDEuNzcybDMuNTA5LDMuMzM2YTQuNjc1LDQuNjc1LDAsMCwxLDEuNDU0LDMuMzg4VjcwLjdoNi44MTRsLjYyLTEuODE0VjU5LjJhNC42NzYsNC42NzYsMCwwLDAtMS40NTQtMy4zODhaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjQ5LjI0OSAtNTAuNjgyKSIgZmlsbD0iI2ZmYzI1MCIvPgogICAgPC9nPgogICAgPGcgaWQ9Ikdyb3VwXzIwOTg5IiBkYXRhLW5hbWU9Ikdyb3VwIDIwOTg5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1Mi45ODggMjguMTk1KSI+CiAgICAgIDxwYXRoIGlkPSJQYXRoXzM0ODkwIiBkYXRhLW5hbWU9IlBhdGggMzQ4OTAiIGQ9Ik0zNDIuMiwxODQuOTY1Yy0xLjUyMiwzLjIzMS0xLjY1Myw3LjUyNy4yNTgsOC40MjdzNS4xMzktMS45MzgsNi42NjEtNS4xNjkuNTM4LTUuMTYxLTEuMzcyLTYuMDYxUzM0My43MjEsMTgxLjczNCwzNDIuMiwxODQuOTY1WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTM0MS4wNCAtMTgxLjc2KSIgZmlsbD0iI2ZmY2JiZSIvPgogICAgPC9nPgogICAgPGcgaWQ9Ikdyb3VwXzIwOTkwIiBkYXRhLW5hbWU9Ikdyb3VwIDIwOTkwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyOS44MjUgNDMuNjQ4KSI+CiAgICAgIDxwYXRoIGlkPSJQYXRoXzM0ODkxIiBkYXRhLW5hbWU9IlBhdGggMzQ4OTEiIGQ9Ik0yMDMuOTU0LDI5OS40NTdoLTMuNjMzYTguNiw4LjYsMCwwLDEtOC42LTguNlYyODEuMzhoMjAuODM2djkuNDc2QTguNiw4LjYsMCwwLDEsMjAzLjk1NCwyOTkuNDU3WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE5MS43MTkgLTI4MS4zOCkiIGZpbGw9IiNlYWFjOWQiLz4KICAgIDwvZz4KICAgIDxwYXRoIGlkPSJQYXRoXzM0ODkyIiBkYXRhLW5hbWU9IlBhdGggMzQ4OTIiIGQ9Ik0yNDUuNTgyLDI4MS4zOHY5LjQ3NmE4LjYsOC42LDAsMCwxLTcuMjMzLDguNDkyLDguNjY4LDguNjY4LDAsMCwwLDEuMzY4LjExaDMuNjMzYTguNiw4LjYsMCwwLDAsOC42LTguNlYyODEuMzhaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjAxLjI5MSAtMjM3LjczMikiIGZpbGw9IiNkZjkzODAiLz4KICAgIDxnIGlkPSJHcm91cF8yMDk5MSIgZGF0YS1uYW1lPSJHcm91cCAyMDk5MSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjUuMzkzIDIzLjM2OSkiPgogICAgICA8cGF0aCBpZD0iUGF0aF8zNDg5MyIgZGF0YS1uYW1lPSJQYXRoIDM0ODkzIiBkPSJNMTkwLjE1LDE1MC42NTNIMTY1Ljg0NGEyLjcsMi43LDAsMCwwLTIuNywyLjd2OS42YTE1LjY5MywxNS42OTMsMCwwLDAsNi45MzksMTMuMDI1bDQuMzE2LDIuOWE2LjQ0Niw2LjQ0NiwwLDAsMCwxLjM4Ny43MDYsMjEuMTcyLDIxLjE3MiwwLDAsMCwzLjAyOS0uMDQ5LDE1LjQ4NiwxNS40ODYsMCwwLDAsMy4yMjgtLjk2MmwzLjg2My0yLjZhMTUuNjkzLDE1LjY5MywwLDAsMCw2LjkzOS0xMy4wMjV2LTkuNmEyLjcsMi43LDAsMCwwLTIuNy0yLjdaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTYzLjE0NyAtMTUwLjY1MykiIGZpbGw9IiNmZmNiYmUiLz4KICAgIDwvZz4KICAgIDxnIGlkPSJHcm91cF8yMDk5MiIgZGF0YS1uYW1lPSJHcm91cCAyMDk5MiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzguMDM1IDIzLjM2OSkiPgogICAgICA8cGF0aCBpZD0iUGF0aF8zNDg5NCIgZGF0YS1uYW1lPSJQYXRoIDM0ODk0IiBkPSJNMjU3LjI4OSwxNTAuNjUydjEyLjNhMTUuNjk0LDE1LjY5NCwwLDAsMS02LjkzOSwxMy4wMjVsLTQuMzE2LDIuOWE2LjQ1NSw2LjQ1NSwwLDAsMS0xLjM4OS43MDYsNi40NDcsNi40NDcsMCwwLDAsNS44LS43MDZsNC4zMTYtMi45YTE1LjY5MywxNS42OTMsMCwwLDAsNi45MzktMTMuMDI1di05LjZhMi43LDIuNywwLDAsMC0yLjctMi43aC0xLjcxN1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yNDQuNjQ1IC0xNTAuNjUyKSIgZmlsbD0iI2VhYWM5ZCIvPgogICAgPC9nPgogICAgPGcgaWQ9Ikdyb3VwXzIwOTkzIiBkYXRhLW5hbWU9Ikdyb3VwIDIwOTkzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1Mi45ODggMjguMTk1KSI+CiAgICAgIDxwYXRoIGlkPSJQYXRoXzM0ODk1IiBkYXRhLW5hbWU9IlBhdGggMzQ4OTUiIGQ9Ik0zNDIuMiwxODQuOTY1Yy0xLjUyMiwzLjIzMS0xLjY1Myw3LjUyNy4yNTgsOC40MjdzNS4xMzktMS45MzgsNi42NjEtNS4xNjkuNTM4LTUuMTYxLTEuMzcyLTYuMDYxUzM0My43MjEsMTgxLjczNCwzNDIuMiwxODQuOTY1WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTM0MS4wNCAtMTgxLjc2KSIgZmlsbD0iI2VhYWM5ZCIvPgogICAgPC9nPgogICAgPGcgaWQ9Ikdyb3VwXzIwOTk0IiBkYXRhLW5hbWU9Ikdyb3VwIDIwOTk0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxOC42NzYgMjguMTk1KSI+CiAgICAgIDxwYXRoIGlkPSJQYXRoXzM0ODk2IiBkYXRhLW5hbWU9IlBhdGggMzQ4OTYiIGQ9Ik0xMjcuNTA5LDE4NC45NjVjMS41MjIsMy4yMzEsMS42NTMsNy41MjctLjI1OCw4LjQyN3MtNS4xMzktMS45MzgtNi42NjEtNS4xNjktLjUzOC01LjE2MSwxLjM3Mi02LjA2MVMxMjUuOTg3LDE4MS43MzQsMTI3LjUwOSwxODQuOTY1WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTExOS44NDUgLTE4MS43NikiIGZpbGw9IiNmZmNiYmUiLz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPgo="
                          width="84"
                          height="84"
                          class="avatar"
                        />
                        <div class="profile align-self-center w-100">
                          <p class="name mb-2">anhyeuem12345</p>
                          <div class="d-flex w-100">
                            <div class="label orange mr-2">
                              <div class="d-flex align-items-center">
                                <img
                                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTMuNDAxIiBoZWlnaHQ9IjEzLjQwMSIgdmlld0JveD0iMCAwIDEzLjQwMSAxMy40MDEiPgogIDxkZWZzPgogICAgPGNsaXBQYXRoIGlkPSJjbGlwLXBhdGgiPgogICAgICA8cGF0aCBpZD0iUGF0aF8zNDUzNyIgZGF0YS1uYW1lPSJQYXRoIDM0NTM3IiBkPSJNMCwwSDEzLjRWMTMuNEgwWiIgZmlsbD0iI2ZmZiIvPgogICAgPC9jbGlwUGF0aD4KICA8L2RlZnM+CiAgPGcgaWQ9Im1hc3Rlci1leHBlcmllbmNlXzUiIGNsaXAtcGF0aD0idXJsKCNjbGlwLXBhdGgpIj4KICAgIDxwYXRoIGlkPSJQYXRoXzM0NTM2IiBkYXRhLW5hbWU9IlBhdGggMzQ1MzYiIGQ9Ik03LjE1MywzLjEsNy43LDQuODU0YS40OTEuNDkxLDAsMCwwLC40Ni4zNWgxLjc3YS41MS41MSwwLDAsMSwuMjgzLjkxNkw4Ljc4Miw3LjIwNmEuNTI1LjUyNSwwLDAsMC0uMTc5LjU2NmwuNTQzLDEuNzU3YS40ODkuNDg5LDAsMCwxLS43NDQuNTY2TDYuOTc1LDkuMDA4YS40NzkuNDc5LDAsMCwwLS41NzMsMGwtMS40MiwxLjA4N2EuNDg4LjQ4OCwwLDAsMS0uNzQ0LS41NjZsLjU0My0xLjc1N0EuNTE0LjUxNCwwLDAsMCw0LjYsNy4yMDZMMy4xNzUsNi4xMTlBLjUxLjUxLDAsMCwxLDMuNDU4LDUuMmgxLjc3YS40OTIuNDkyLDAsMCwwLC40NjItLjM1TDYuMjMxLDMuMWEuNDc4LjQ3OCwwLDAsMSwuOTIyLDBaTTIuOTc0LDkuODI1QTUuOTQzLDUuOTQzLDAsMCwxLDIuMjgyLDguNDEsMS41NDIsMS41NDIsMCwwLDAsLjgxOCw3LjM1M0gwQTguMjUsOC4yNSwwLDAsMCwuNDMxLDkuMjgxYTEuNSwxLjUsMCwwLDAsMi41NDMuNTQzWk0xMS4xLDguNDFhNS45NjksNS45NjksMCwwLDEtLjY5MiwxLjQxNSwxLjUsMS41LDAsMCwwLDIuNTQ0LS41NDMsOC4yNDksOC4yNDksMCwwLDAsLjQzMS0xLjkyOGgtLjgxOUExLjU0OSwxLjU0OSwwLDAsMCwxMS4xLDguNDFaTTUuOTQ5LDExLjY2M2E1LjE5Myw1LjE5MywwLDAsMS0xLjQyLS40NTQsMS40NjYsMS40NjYsMCwwLDAtMS43LjM1bC0uNTk1LjYxOGE3LjIxLDcuMjEsMCwwLDAsMS41NDcuOTksMS41NjgsMS41NjgsMCwwLDAsMi4xNzItMS41Wm0yLjkwNy0uNDU0YTUuMiw1LjIsMCwwLDEtMS40Mi40NTQsMS41NjQsMS41NjQsMCwwLDAsMi4xNjQsMS41LDcuMDE0LDcuMDE0LDAsMCwwLDEuNTQ3LS45OWwtLjYtLjYxOEExLjQ1MSwxLjQ1MSwwLDAsMCw4Ljg1NywxMS4yMDlabTIuNDYyLTYuODQyYTUuNzY5LDUuNzY5LDAsMCwxLC41MDYsMS40ODksMS40OTQsMS40OTQsMCwwLDAsMS40MTMtMi4xODEsOC42NDUsOC42NDUsMCwwLDAtMS4wNTYtMS42NjhsLS41OC41NzNhMS41NjUsMS41NjUsMCwwLDAtLjI4MywxLjc4N1ptLTkuMjI5LDBhNS42NjgsNS42NjgsMCwwLDAtLjUxMywxLjQ4OUExLjQ5NCwxLjQ5NCwwLDAsMSwuMTYzLDMuNjc1LDguNjY1LDguNjY1LDAsMCwxLDEuMjIsMmwuNTguNTgxYTEuNTU1LDEuNTU1LDAsMCwxLC4yOSwxLjc4N1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAxIC0wLjUxMSkiIGZpbGw9IiNmZmYiLz4KICA8L2c+Cjwvc3ZnPgo="
                                  class="mr-2"
                                />
                                <span>Chuyên gia</span>
                              </div>
                            </div>
                            <!---->
                          </div>
                        </div>
                      </div>
                      <div class="bodyBox mb-015rem numberContent">
                        <div class="d-flex w-100">
                          <div class="flexBox">
                            <p class="number gain green">95%</p>
                            <p class="title">Lợi nhuận (30N)</p>
                          </div>
                          <div class="flexBox">
                            <p class="number">0</p>
                            <p class="title">Người sao chép</p>
                          </div>
                          <div class="flexBox">
                            <p class="number">5%</p>
                            <p class="title">Chia sẻ ln</p>
                          </div>
                        </div>
                      </div>
                      <div class="bodyBox">
                        <button
                          class="btn btn-secondary startCopy w-100 d-flex align-items-center justify-content-center disabled"
                        >
                          <img
                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOS4wNTciIGhlaWdodD0iMTkuMDU3IiB2aWV3Qm94PSIwIDAgMTkuMDU3IDE5LjA1NyI+CiAgPHBhdGggaWQ9IlBhdGhfMzQ1NDkiIGRhdGEtbmFtZT0iUGF0aCAzNDU0OSIgZD0iTTExLjUyOCwyYTkuNTI4LDkuNTI4LDAsMSwwLDkuNTI4LDkuNTI4QTkuNTI4LDkuNTI4LDAsMCwwLDExLjUyOCwyWm00LjkyMyw5LjhMOC44MjksMTYuMjQ5YS4zMTguMzE4LDAsMCwxLS40NzYtLjI3NFY3LjA4MmEuMzE4LjMxOCwwLDAsMSwuNDc2LS4yNzRsNy42MjMsNC40NDdhLjMxOC4zMTgsMCwwLDEsMCwuNTQ5WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIgLTIpIiBmaWxsPSIjZmZmIi8+Cjwvc3ZnPgo="
                          />
                          <span class="ml-2">Bắt đầu sao chép</span>
                        </button>
                      </div>
                      <div class="footerBox">
                        <p class="mb-0">
                          <span class="text mr-1">Đầu tư tối thiểu</span
                          ><span class="number">$10.00</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-lg-6 col-xl-4">
                  <div class="communityItem">
                    <div class="boxProfile">
                      <div class="headerBox d-flex">
                        <img
                          src="https://projgapidiagnostics.blob.core.windows.net/kyc-data/34/avatar/a536e588-79f6-4270-a984-31460a56c0c7_thumbnail.jpg?sv=2016-05-31&amp;sig=dXgf18yFQIsYlHKTWr6zGUl1pWHbae9v%2BdZDEVkhgqo%3D&amp;spr=https&amp;se=2020-10-15T10%3A31%3A33Z&amp;srt=o&amp;ss=bf&amp;sp=r"
                          width="84"
                          height="84"
                          class="avatar"
                        />
                        <div class="profile align-self-center w-100">
                          <p class="name mb-2">tuanhoang91</p>
                          <div class="d-flex w-100">
                            <div class="label orange mr-2">
                              <div class="d-flex align-items-center">
                                <img
                                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTMuNDAxIiBoZWlnaHQ9IjEzLjQwMSIgdmlld0JveD0iMCAwIDEzLjQwMSAxMy40MDEiPgogIDxkZWZzPgogICAgPGNsaXBQYXRoIGlkPSJjbGlwLXBhdGgiPgogICAgICA8cGF0aCBpZD0iUGF0aF8zNDUzNyIgZGF0YS1uYW1lPSJQYXRoIDM0NTM3IiBkPSJNMCwwSDEzLjRWMTMuNEgwWiIgZmlsbD0iI2ZmZiIvPgogICAgPC9jbGlwUGF0aD4KICA8L2RlZnM+CiAgPGcgaWQ9Im1hc3Rlci1leHBlcmllbmNlXzUiIGNsaXAtcGF0aD0idXJsKCNjbGlwLXBhdGgpIj4KICAgIDxwYXRoIGlkPSJQYXRoXzM0NTM2IiBkYXRhLW5hbWU9IlBhdGggMzQ1MzYiIGQ9Ik03LjE1MywzLjEsNy43LDQuODU0YS40OTEuNDkxLDAsMCwwLC40Ni4zNWgxLjc3YS41MS41MSwwLDAsMSwuMjgzLjkxNkw4Ljc4Miw3LjIwNmEuNTI1LjUyNSwwLDAsMC0uMTc5LjU2NmwuNTQzLDEuNzU3YS40ODkuNDg5LDAsMCwxLS43NDQuNTY2TDYuOTc1LDkuMDA4YS40NzkuNDc5LDAsMCwwLS41NzMsMGwtMS40MiwxLjA4N2EuNDg4LjQ4OCwwLDAsMS0uNzQ0LS41NjZsLjU0My0xLjc1N0EuNTE0LjUxNCwwLDAsMCw0LjYsNy4yMDZMMy4xNzUsNi4xMTlBLjUxLjUxLDAsMCwxLDMuNDU4LDUuMmgxLjc3YS40OTIuNDkyLDAsMCwwLC40NjItLjM1TDYuMjMxLDMuMWEuNDc4LjQ3OCwwLDAsMSwuOTIyLDBaTTIuOTc0LDkuODI1QTUuOTQzLDUuOTQzLDAsMCwxLDIuMjgyLDguNDEsMS41NDIsMS41NDIsMCwwLDAsLjgxOCw3LjM1M0gwQTguMjUsOC4yNSwwLDAsMCwuNDMxLDkuMjgxYTEuNSwxLjUsMCwwLDAsMi41NDMuNTQzWk0xMS4xLDguNDFhNS45NjksNS45NjksMCwwLDEtLjY5MiwxLjQxNSwxLjUsMS41LDAsMCwwLDIuNTQ0LS41NDMsOC4yNDksOC4yNDksMCwwLDAsLjQzMS0xLjkyOGgtLjgxOUExLjU0OSwxLjU0OSwwLDAsMCwxMS4xLDguNDFaTTUuOTQ5LDExLjY2M2E1LjE5Myw1LjE5MywwLDAsMS0xLjQyLS40NTQsMS40NjYsMS40NjYsMCwwLDAtMS43LjM1bC0uNTk1LjYxOGE3LjIxLDcuMjEsMCwwLDAsMS41NDcuOTksMS41NjgsMS41NjgsMCwwLDAsMi4xNzItMS41Wm0yLjkwNy0uNDU0YTUuMiw1LjIsMCwwLDEtMS40Mi40NTQsMS41NjQsMS41NjQsMCwwLDAsMi4xNjQsMS41LDcuMDE0LDcuMDE0LDAsMCwwLDEuNTQ3LS45OWwtLjYtLjYxOEExLjQ1MSwxLjQ1MSwwLDAsMCw4Ljg1NywxMS4yMDlabTIuNDYyLTYuODQyYTUuNzY5LDUuNzY5LDAsMCwxLC41MDYsMS40ODksMS40OTQsMS40OTQsMCwwLDAsMS40MTMtMi4xODEsOC42NDUsOC42NDUsMCwwLDAtMS4wNTYtMS42NjhsLS41OC41NzNhMS41NjUsMS41NjUsMCwwLDAtLjI4MywxLjc4N1ptLTkuMjI5LDBhNS42NjgsNS42NjgsMCwwLDAtLjUxMywxLjQ4OUExLjQ5NCwxLjQ5NCwwLDAsMSwuMTYzLDMuNjc1LDguNjY1LDguNjY1LDAsMCwxLDEuMjIsMmwuNTguNTgxYTEuNTU1LDEuNTU1LDAsMCwxLC4yOSwxLjc4N1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAxIC0wLjUxMSkiIGZpbGw9IiNmZmYiLz4KICA8L2c+Cjwvc3ZnPgo="
                                  class="mr-2"
                                />
                                <span>Chuyên gia</span>
                              </div>
                            </div>
                            <!---->
                          </div>
                        </div>
                      </div>
                      <div class="bodyBox mb-015rem numberContent">
                        <div class="d-flex w-100">
                          <div class="flexBox">
                            <p class="number gain green">95%</p>
                            <p class="title">Lợi nhuận (30N)</p>
                          </div>
                          <div class="flexBox">
                            <p class="number">0</p>
                            <p class="title">Người sao chép</p>
                          </div>
                          <div class="flexBox">
                            <p class="number">5%</p>
                            <p class="title">Chia sẻ ln</p>
                          </div>
                        </div>
                      </div>
                      <div class="bodyBox">
                        <button
                          class="btn btn-secondary startCopy w-100 d-flex align-items-center justify-content-center disabled"
                        >
                          <img
                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOS4wNTciIGhlaWdodD0iMTkuMDU3IiB2aWV3Qm94PSIwIDAgMTkuMDU3IDE5LjA1NyI+CiAgPHBhdGggaWQ9IlBhdGhfMzQ1NDkiIGRhdGEtbmFtZT0iUGF0aCAzNDU0OSIgZD0iTTExLjUyOCwyYTkuNTI4LDkuNTI4LDAsMSwwLDkuNTI4LDkuNTI4QTkuNTI4LDkuNTI4LDAsMCwwLDExLjUyOCwyWm00LjkyMyw5LjhMOC44MjksMTYuMjQ5YS4zMTguMzE4LDAsMCwxLS40NzYtLjI3NFY3LjA4MmEuMzE4LjMxOCwwLDAsMSwuNDc2LS4yNzRsNy42MjMsNC40NDdhLjMxOC4zMTgsMCwwLDEsMCwuNTQ5WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIgLTIpIiBmaWxsPSIjZmZmIi8+Cjwvc3ZnPgo="
                          />
                          <span class="ml-2">Bắt đầu sao chép</span>
                        </button>
                      </div>
                      <div class="footerBox">
                        <p class="mb-0">
                          <span class="text mr-1">Đầu tư tối thiểu</span
                          ><span class="number">$10.00</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-lg-6 col-xl-4">
                  <div class="communityItem">
                    <div class="boxProfile">
                      <div class="headerBox d-flex">
                        <img
                          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgdmlld0JveD0iMCAwIDgwIDgwIj4KICA8ZyBpZD0iR3JvdXBfMjA5OTgiIGRhdGEtbmFtZT0iR3JvdXAgMjA5OTgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMzg5IC0wLjQ0MykiPgogICAgPGcgaWQ9Ikdyb3VwXzIwOTg2IiBkYXRhLW5hbWU9Ikdyb3VwIDIwOTg2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC4zODkpIj4KICAgICAgPGcgaWQ9Ikdyb3VwXzIwOTgyIiBkYXRhLW5hbWU9Ikdyb3VwIDIwOTgyIj4KICAgICAgICA8Y2lyY2xlIGlkPSJFbGxpcHNlXzE5MTgiIGRhdGEtbmFtZT0iRWxsaXBzZSAxOTE4IiBjeD0iNDAiIGN5PSI0MCIgcj0iNDAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMC40NDMpIiBmaWxsPSIjZWNmNGZmIi8+CiAgICAgIDwvZz4KICAgICAgPGcgaWQ9Ikdyb3VwXzIwOTgzIiBkYXRhLW5hbWU9Ikdyb3VwIDIwOTgzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4LjM0OCA3Ljg3NCkiPgogICAgICAgIDxwYXRoIGlkPSJQYXRoXzM0ODg1IiBkYXRhLW5hbWU9IlBhdGggMzQ4ODUiIGQ9Ik0xMDYuMzM1LDUwLjc1OWEzOS43MTQsMzkuNzE0LDAsMCwxLTU1LjU3Niw1NS41NzYsMzkuNzEzLDM5LjcxMywwLDEsMCw1NS41NzYtNTUuNTc2WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTUwLjc1OSAtNTAuNzU5KSIgZmlsbD0iI2RkZWFmYiIvPgogICAgICA8L2c+CiAgICAgIDxnIGlkPSJHcm91cF8yMDk4NCIgZGF0YS1uYW1lPSJHcm91cCAyMDk4NCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOS45MDYgNTIuNzI2KSI+CiAgICAgICAgPHBhdGggaWQ9IlBhdGhfMzQ4ODYiIGRhdGEtbmFtZT0iUGF0aCAzNDg4NiIgZD0iTTEyMS4zNjUsMzUyLjU3OUEyMC45NDUsMjAuOTQ1LDAsMCwwLDEwMi4xMTksMzM5LjlIODAuMDU0YTIwLjk0NSwyMC45NDUsMCwwLDAtMTkuMjQ2LDEyLjY3NiwzOS43MDUsMzkuNzA1LDAsMCwwLDYwLjU1NywwWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTYwLjgwOCAtMzM5LjkwMykiIGZpbGw9IiM1MjQ3OTgiLz4KICAgICAgPC9nPgogICAgICA8ZyBpZD0iR3JvdXBfMjA5ODUiIGRhdGEtbmFtZT0iR3JvdXAgMjA5ODUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDkuOTA2IDU2LjQyMSkiPgogICAgICAgIDxwYXRoIGlkPSJQYXRoXzM0ODg3IiBkYXRhLW5hbWU9IlBhdGggMzQ4ODciIGQ9Ik0xMjEuMzY1LDM3Mi43YTIxLjAxOSwyMS4wMTksMCwwLDAtNy4zNy04Ljk4MUEzOS43MTcsMzkuNzE3LDAsMCwxLDYxLjEsMzcyLjA1MmMtLjEuMjE1LS4yLjQzMS0uMjk0LjY1YTM5LjcwNSwzOS43MDUsMCwwLDAsNjAuNTU3LDBaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjAuODA4IC0zNjMuNzIxKSIgZmlsbD0iIzQ1M2Q4MSIvPgogICAgICA8L2c+CiAgICA8L2c+CiAgICA8ZyBpZD0iR3JvdXBfMjA5ODciIGRhdGEtbmFtZT0iR3JvdXAgMjA5ODciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI1LjM5MyA3Ljg2MikiPgogICAgICA8cGF0aCBpZD0iUGF0aF8zNDg4OCIgZGF0YS1uYW1lPSJQYXRoIDM0ODg4IiBkPSJNMTkxLjQsNTUuODE1bC0zLjUwOS0zLjMzNmE2LjUyNCw2LjUyNCwwLDAsMC02LjU5NS0xLjQ0OWwtMTIuNjA2LDQuMjg1YTguMTY1LDguMTY1LDAsMCwwLTUuNTM3LDcuNzMxdjUuODQybC42MjEsMS44MTRoMjguNDU5bC42Mi0xLjgxNFY1OS4yQTQuNjc2LDQuNjc2LDAsMCwwLDE5MS40LDU1LjgxNVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNjMuMTQ5IC01MC42ODIpIiBmaWxsPSIjZmZkMDY0Ii8+CiAgICA8L2c+CiAgICA8ZyBpZD0iR3JvdXBfMjA5ODgiIGRhdGEtbmFtZT0iR3JvdXAgMjA5ODgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM4Ljc0OSA3Ljg2MikiPgogICAgICA8cGF0aCBpZD0iUGF0aF8zNDg4OSIgZGF0YS1uYW1lPSJQYXRoIDM0ODg5IiBkPSJNMjY0LjE0LDU1LjgxNWwtMy41MDktMy4zMzZhNi41MjQsNi41MjQsMCwwLDAtNi41OTUtMS40NDlsLTQuNzg3LDEuNjI3YTYuNTIyLDYuNTIyLDAsMCwxLDMuOTQ4LDEuNzcybDMuNTA5LDMuMzM2YTQuNjc1LDQuNjc1LDAsMCwxLDEuNDU0LDMuMzg4VjcwLjdoNi44MTRsLjYyLTEuODE0VjU5LjJhNC42NzYsNC42NzYsMCwwLDAtMS40NTQtMy4zODhaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjQ5LjI0OSAtNTAuNjgyKSIgZmlsbD0iI2ZmYzI1MCIvPgogICAgPC9nPgogICAgPGcgaWQ9Ikdyb3VwXzIwOTg5IiBkYXRhLW5hbWU9Ikdyb3VwIDIwOTg5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1Mi45ODggMjguMTk1KSI+CiAgICAgIDxwYXRoIGlkPSJQYXRoXzM0ODkwIiBkYXRhLW5hbWU9IlBhdGggMzQ4OTAiIGQ9Ik0zNDIuMiwxODQuOTY1Yy0xLjUyMiwzLjIzMS0xLjY1Myw3LjUyNy4yNTgsOC40MjdzNS4xMzktMS45MzgsNi42NjEtNS4xNjkuNTM4LTUuMTYxLTEuMzcyLTYuMDYxUzM0My43MjEsMTgxLjczNCwzNDIuMiwxODQuOTY1WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTM0MS4wNCAtMTgxLjc2KSIgZmlsbD0iI2ZmY2JiZSIvPgogICAgPC9nPgogICAgPGcgaWQ9Ikdyb3VwXzIwOTkwIiBkYXRhLW5hbWU9Ikdyb3VwIDIwOTkwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyOS44MjUgNDMuNjQ4KSI+CiAgICAgIDxwYXRoIGlkPSJQYXRoXzM0ODkxIiBkYXRhLW5hbWU9IlBhdGggMzQ4OTEiIGQ9Ik0yMDMuOTU0LDI5OS40NTdoLTMuNjMzYTguNiw4LjYsMCwwLDEtOC42LTguNlYyODEuMzhoMjAuODM2djkuNDc2QTguNiw4LjYsMCwwLDEsMjAzLjk1NCwyOTkuNDU3WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE5MS43MTkgLTI4MS4zOCkiIGZpbGw9IiNlYWFjOWQiLz4KICAgIDwvZz4KICAgIDxwYXRoIGlkPSJQYXRoXzM0ODkyIiBkYXRhLW5hbWU9IlBhdGggMzQ4OTIiIGQ9Ik0yNDUuNTgyLDI4MS4zOHY5LjQ3NmE4LjYsOC42LDAsMCwxLTcuMjMzLDguNDkyLDguNjY4LDguNjY4LDAsMCwwLDEuMzY4LjExaDMuNjMzYTguNiw4LjYsMCwwLDAsOC42LTguNlYyODEuMzhaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjAxLjI5MSAtMjM3LjczMikiIGZpbGw9IiNkZjkzODAiLz4KICAgIDxnIGlkPSJHcm91cF8yMDk5MSIgZGF0YS1uYW1lPSJHcm91cCAyMDk5MSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjUuMzkzIDIzLjM2OSkiPgogICAgICA8cGF0aCBpZD0iUGF0aF8zNDg5MyIgZGF0YS1uYW1lPSJQYXRoIDM0ODkzIiBkPSJNMTkwLjE1LDE1MC42NTNIMTY1Ljg0NGEyLjcsMi43LDAsMCwwLTIuNywyLjd2OS42YTE1LjY5MywxNS42OTMsMCwwLDAsNi45MzksMTMuMDI1bDQuMzE2LDIuOWE2LjQ0Niw2LjQ0NiwwLDAsMCwxLjM4Ny43MDYsMjEuMTcyLDIxLjE3MiwwLDAsMCwzLjAyOS0uMDQ5LDE1LjQ4NiwxNS40ODYsMCwwLDAsMy4yMjgtLjk2MmwzLjg2My0yLjZhMTUuNjkzLDE1LjY5MywwLDAsMCw2LjkzOS0xMy4wMjV2LTkuNmEyLjcsMi43LDAsMCwwLTIuNy0yLjdaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTYzLjE0NyAtMTUwLjY1MykiIGZpbGw9IiNmZmNiYmUiLz4KICAgIDwvZz4KICAgIDxnIGlkPSJHcm91cF8yMDk5MiIgZGF0YS1uYW1lPSJHcm91cCAyMDk5MiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzguMDM1IDIzLjM2OSkiPgogICAgICA8cGF0aCBpZD0iUGF0aF8zNDg5NCIgZGF0YS1uYW1lPSJQYXRoIDM0ODk0IiBkPSJNMjU3LjI4OSwxNTAuNjUydjEyLjNhMTUuNjk0LDE1LjY5NCwwLDAsMS02LjkzOSwxMy4wMjVsLTQuMzE2LDIuOWE2LjQ1NSw2LjQ1NSwwLDAsMS0xLjM4OS43MDYsNi40NDcsNi40NDcsMCwwLDAsNS44LS43MDZsNC4zMTYtMi45YTE1LjY5MywxNS42OTMsMCwwLDAsNi45MzktMTMuMDI1di05LjZhMi43LDIuNywwLDAsMC0yLjctMi43aC0xLjcxN1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yNDQuNjQ1IC0xNTAuNjUyKSIgZmlsbD0iI2VhYWM5ZCIvPgogICAgPC9nPgogICAgPGcgaWQ9Ikdyb3VwXzIwOTkzIiBkYXRhLW5hbWU9Ikdyb3VwIDIwOTkzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1Mi45ODggMjguMTk1KSI+CiAgICAgIDxwYXRoIGlkPSJQYXRoXzM0ODk1IiBkYXRhLW5hbWU9IlBhdGggMzQ4OTUiIGQ9Ik0zNDIuMiwxODQuOTY1Yy0xLjUyMiwzLjIzMS0xLjY1Myw3LjUyNy4yNTgsOC40MjdzNS4xMzktMS45MzgsNi42NjEtNS4xNjkuNTM4LTUuMTYxLTEuMzcyLTYuMDYxUzM0My43MjEsMTgxLjczNCwzNDIuMiwxODQuOTY1WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTM0MS4wNCAtMTgxLjc2KSIgZmlsbD0iI2VhYWM5ZCIvPgogICAgPC9nPgogICAgPGcgaWQ9Ikdyb3VwXzIwOTk0IiBkYXRhLW5hbWU9Ikdyb3VwIDIwOTk0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxOC42NzYgMjguMTk1KSI+CiAgICAgIDxwYXRoIGlkPSJQYXRoXzM0ODk2IiBkYXRhLW5hbWU9IlBhdGggMzQ4OTYiIGQ9Ik0xMjcuNTA5LDE4NC45NjVjMS41MjIsMy4yMzEsMS42NTMsNy41MjctLjI1OCw4LjQyN3MtNS4xMzktMS45MzgtNi42NjEtNS4xNjktLjUzOC01LjE2MSwxLjM3Mi02LjA2MVMxMjUuOTg3LDE4MS43MzQsMTI3LjUwOSwxODQuOTY1WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTExOS44NDUgLTE4MS43NikiIGZpbGw9IiNmZmNiYmUiLz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPgo="
                          width="84"
                          height="84"
                          class="avatar"
                        />
                        <div class="profile align-self-center w-100">
                          <p class="name mb-2">Khanhlinhnguyen</p>
                          <div class="d-flex w-100">
                            <div class="label orange mr-2">
                              <div class="d-flex align-items-center">
                                <img
                                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTMuNDAxIiBoZWlnaHQ9IjEzLjQwMSIgdmlld0JveD0iMCAwIDEzLjQwMSAxMy40MDEiPgogIDxkZWZzPgogICAgPGNsaXBQYXRoIGlkPSJjbGlwLXBhdGgiPgogICAgICA8cGF0aCBpZD0iUGF0aF8zNDUzNyIgZGF0YS1uYW1lPSJQYXRoIDM0NTM3IiBkPSJNMCwwSDEzLjRWMTMuNEgwWiIgZmlsbD0iI2ZmZiIvPgogICAgPC9jbGlwUGF0aD4KICA8L2RlZnM+CiAgPGcgaWQ9Im1hc3Rlci1leHBlcmllbmNlXzUiIGNsaXAtcGF0aD0idXJsKCNjbGlwLXBhdGgpIj4KICAgIDxwYXRoIGlkPSJQYXRoXzM0NTM2IiBkYXRhLW5hbWU9IlBhdGggMzQ1MzYiIGQ9Ik03LjE1MywzLjEsNy43LDQuODU0YS40OTEuNDkxLDAsMCwwLC40Ni4zNWgxLjc3YS41MS41MSwwLDAsMSwuMjgzLjkxNkw4Ljc4Miw3LjIwNmEuNTI1LjUyNSwwLDAsMC0uMTc5LjU2NmwuNTQzLDEuNzU3YS40ODkuNDg5LDAsMCwxLS43NDQuNTY2TDYuOTc1LDkuMDA4YS40NzkuNDc5LDAsMCwwLS41NzMsMGwtMS40MiwxLjA4N2EuNDg4LjQ4OCwwLDAsMS0uNzQ0LS41NjZsLjU0My0xLjc1N0EuNTE0LjUxNCwwLDAsMCw0LjYsNy4yMDZMMy4xNzUsNi4xMTlBLjUxLjUxLDAsMCwxLDMuNDU4LDUuMmgxLjc3YS40OTIuNDkyLDAsMCwwLC40NjItLjM1TDYuMjMxLDMuMWEuNDc4LjQ3OCwwLDAsMSwuOTIyLDBaTTIuOTc0LDkuODI1QTUuOTQzLDUuOTQzLDAsMCwxLDIuMjgyLDguNDEsMS41NDIsMS41NDIsMCwwLDAsLjgxOCw3LjM1M0gwQTguMjUsOC4yNSwwLDAsMCwuNDMxLDkuMjgxYTEuNSwxLjUsMCwwLDAsMi41NDMuNTQzWk0xMS4xLDguNDFhNS45NjksNS45NjksMCwwLDEtLjY5MiwxLjQxNSwxLjUsMS41LDAsMCwwLDIuNTQ0LS41NDMsOC4yNDksOC4yNDksMCwwLDAsLjQzMS0xLjkyOGgtLjgxOUExLjU0OSwxLjU0OSwwLDAsMCwxMS4xLDguNDFaTTUuOTQ5LDExLjY2M2E1LjE5Myw1LjE5MywwLDAsMS0xLjQyLS40NTQsMS40NjYsMS40NjYsMCwwLDAtMS43LjM1bC0uNTk1LjYxOGE3LjIxLDcuMjEsMCwwLDAsMS41NDcuOTksMS41NjgsMS41NjgsMCwwLDAsMi4xNzItMS41Wm0yLjkwNy0uNDU0YTUuMiw1LjIsMCwwLDEtMS40Mi40NTQsMS41NjQsMS41NjQsMCwwLDAsMi4xNjQsMS41LDcuMDE0LDcuMDE0LDAsMCwwLDEuNTQ3LS45OWwtLjYtLjYxOEExLjQ1MSwxLjQ1MSwwLDAsMCw4Ljg1NywxMS4yMDlabTIuNDYyLTYuODQyYTUuNzY5LDUuNzY5LDAsMCwxLC41MDYsMS40ODksMS40OTQsMS40OTQsMCwwLDAsMS40MTMtMi4xODEsOC42NDUsOC42NDUsMCwwLDAtMS4wNTYtMS42NjhsLS41OC41NzNhMS41NjUsMS41NjUsMCwwLDAtLjI4MywxLjc4N1ptLTkuMjI5LDBhNS42NjgsNS42NjgsMCwwLDAtLjUxMywxLjQ4OUExLjQ5NCwxLjQ5NCwwLDAsMSwuMTYzLDMuNjc1LDguNjY1LDguNjY1LDAsMCwxLDEuMjIsMmwuNTguNTgxYTEuNTU1LDEuNTU1LDAsMCwxLC4yOSwxLjc4N1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAxIC0wLjUxMSkiIGZpbGw9IiNmZmYiLz4KICA8L2c+Cjwvc3ZnPgo="
                                  class="mr-2"
                                />
                                <span>Chuyên gia</span>
                              </div>
                            </div>
                            <!---->
                          </div>
                        </div>
                      </div>
                      <div class="bodyBox mb-015rem numberContent">
                        <div class="d-flex w-100">
                          <div class="flexBox">
                            <p class="number gain green">95%</p>
                            <p class="title">Lợi nhuận (30N)</p>
                          </div>
                          <div class="flexBox">
                            <p class="number">0</p>
                            <p class="title">Người sao chép</p>
                          </div>
                          <div class="flexBox">
                            <p class="number">5%</p>
                            <p class="title">Chia sẻ ln</p>
                          </div>
                        </div>
                      </div>
                      <div class="bodyBox">
                        <button
                          class="btn btn-secondary startCopy w-100 d-flex align-items-center justify-content-center disabled"
                        >
                          <img
                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOS4wNTciIGhlaWdodD0iMTkuMDU3IiB2aWV3Qm94PSIwIDAgMTkuMDU3IDE5LjA1NyI+CiAgPHBhdGggaWQ9IlBhdGhfMzQ1NDkiIGRhdGEtbmFtZT0iUGF0aCAzNDU0OSIgZD0iTTExLjUyOCwyYTkuNTI4LDkuNTI4LDAsMSwwLDkuNTI4LDkuNTI4QTkuNTI4LDkuNTI4LDAsMCwwLDExLjUyOCwyWm00LjkyMyw5LjhMOC44MjksMTYuMjQ5YS4zMTguMzE4LDAsMCwxLS40NzYtLjI3NFY3LjA4MmEuMzE4LjMxOCwwLDAsMSwuNDc2LS4yNzRsNy42MjMsNC40NDdhLjMxOC4zMTgsMCwwLDEsMCwuNTQ5WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIgLTIpIiBmaWxsPSIjZmZmIi8+Cjwvc3ZnPgo="
                          />
                          <span class="ml-2">Bắt đầu sao chép</span>
                        </button>
                      </div>
                      <div class="footerBox">
                        <p class="mb-0">
                          <span class="text mr-1">Đầu tư tối thiểu</span
                          ><span class="number">$25.00</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-lg-6 col-xl-4">
                  <div class="communityItem">
                    <div class="boxProfile">
                      <div class="headerBox d-flex">
                        <img
                          src="https://projgapidiagnostics.blob.core.windows.net/kyc-data/1568440363409/avatar/aa8b2ec7-7e03-4745-a596-b66c305e1ffa_thumbnail.jpg?sv=2016-05-31&amp;sig=dXgf18yFQIsYlHKTWr6zGUl1pWHbae9v%2BdZDEVkhgqo%3D&amp;spr=https&amp;se=2020-10-15T10%3A31%3A33Z&amp;srt=o&amp;ss=bf&amp;sp=r"
                          width="84"
                          height="84"
                          class="avatar"
                        />
                        <div class="profile align-self-center w-100">
                          <p class="name mb-2">Kimhoan</p>
                          <div class="d-flex w-100">
                            <div class="label orange mr-2">
                              <div class="d-flex align-items-center">
                                <img
                                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTMuNDAxIiBoZWlnaHQ9IjEzLjQwMSIgdmlld0JveD0iMCAwIDEzLjQwMSAxMy40MDEiPgogIDxkZWZzPgogICAgPGNsaXBQYXRoIGlkPSJjbGlwLXBhdGgiPgogICAgICA8cGF0aCBpZD0iUGF0aF8zNDUzNyIgZGF0YS1uYW1lPSJQYXRoIDM0NTM3IiBkPSJNMCwwSDEzLjRWMTMuNEgwWiIgZmlsbD0iI2ZmZiIvPgogICAgPC9jbGlwUGF0aD4KICA8L2RlZnM+CiAgPGcgaWQ9Im1hc3Rlci1leHBlcmllbmNlXzUiIGNsaXAtcGF0aD0idXJsKCNjbGlwLXBhdGgpIj4KICAgIDxwYXRoIGlkPSJQYXRoXzM0NTM2IiBkYXRhLW5hbWU9IlBhdGggMzQ1MzYiIGQ9Ik03LjE1MywzLjEsNy43LDQuODU0YS40OTEuNDkxLDAsMCwwLC40Ni4zNWgxLjc3YS41MS41MSwwLDAsMSwuMjgzLjkxNkw4Ljc4Miw3LjIwNmEuNTI1LjUyNSwwLDAsMC0uMTc5LjU2NmwuNTQzLDEuNzU3YS40ODkuNDg5LDAsMCwxLS43NDQuNTY2TDYuOTc1LDkuMDA4YS40NzkuNDc5LDAsMCwwLS41NzMsMGwtMS40MiwxLjA4N2EuNDg4LjQ4OCwwLDAsMS0uNzQ0LS41NjZsLjU0My0xLjc1N0EuNTE0LjUxNCwwLDAsMCw0LjYsNy4yMDZMMy4xNzUsNi4xMTlBLjUxLjUxLDAsMCwxLDMuNDU4LDUuMmgxLjc3YS40OTIuNDkyLDAsMCwwLC40NjItLjM1TDYuMjMxLDMuMWEuNDc4LjQ3OCwwLDAsMSwuOTIyLDBaTTIuOTc0LDkuODI1QTUuOTQzLDUuOTQzLDAsMCwxLDIuMjgyLDguNDEsMS41NDIsMS41NDIsMCwwLDAsLjgxOCw3LjM1M0gwQTguMjUsOC4yNSwwLDAsMCwuNDMxLDkuMjgxYTEuNSwxLjUsMCwwLDAsMi41NDMuNTQzWk0xMS4xLDguNDFhNS45NjksNS45NjksMCwwLDEtLjY5MiwxLjQxNSwxLjUsMS41LDAsMCwwLDIuNTQ0LS41NDMsOC4yNDksOC4yNDksMCwwLDAsLjQzMS0xLjkyOGgtLjgxOUExLjU0OSwxLjU0OSwwLDAsMCwxMS4xLDguNDFaTTUuOTQ5LDExLjY2M2E1LjE5Myw1LjE5MywwLDAsMS0xLjQyLS40NTQsMS40NjYsMS40NjYsMCwwLDAtMS43LjM1bC0uNTk1LjYxOGE3LjIxLDcuMjEsMCwwLDAsMS41NDcuOTksMS41NjgsMS41NjgsMCwwLDAsMi4xNzItMS41Wm0yLjkwNy0uNDU0YTUuMiw1LjIsMCwwLDEtMS40Mi40NTQsMS41NjQsMS41NjQsMCwwLDAsMi4xNjQsMS41LDcuMDE0LDcuMDE0LDAsMCwwLDEuNTQ3LS45OWwtLjYtLjYxOEExLjQ1MSwxLjQ1MSwwLDAsMCw4Ljg1NywxMS4yMDlabTIuNDYyLTYuODQyYTUuNzY5LDUuNzY5LDAsMCwxLC41MDYsMS40ODksMS40OTQsMS40OTQsMCwwLDAsMS40MTMtMi4xODEsOC42NDUsOC42NDUsMCwwLDAtMS4wNTYtMS42NjhsLS41OC41NzNhMS41NjUsMS41NjUsMCwwLDAtLjI4MywxLjc4N1ptLTkuMjI5LDBhNS42NjgsNS42NjgsMCwwLDAtLjUxMywxLjQ4OUExLjQ5NCwxLjQ5NCwwLDAsMSwuMTYzLDMuNjc1LDguNjY1LDguNjY1LDAsMCwxLDEuMjIsMmwuNTguNTgxYTEuNTU1LDEuNTU1LDAsMCwxLC4yOSwxLjc4N1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAxIC0wLjUxMSkiIGZpbGw9IiNmZmYiLz4KICA8L2c+Cjwvc3ZnPgo="
                                  class="mr-2"
                                />
                                <span>Chuyên gia</span>
                              </div>
                            </div>
                            <!---->
                          </div>
                        </div>
                      </div>
                      <div class="bodyBox mb-015rem numberContent">
                        <div class="d-flex w-100">
                          <div class="flexBox">
                            <p class="number gain green">95%</p>
                            <p class="title">Lợi nhuận (30N)</p>
                          </div>
                          <div class="flexBox">
                            <p class="number">0</p>
                            <p class="title">Người sao chép</p>
                          </div>
                          <div class="flexBox">
                            <p class="number">0%</p>
                            <p class="title">Chia sẻ ln</p>
                          </div>
                        </div>
                      </div>
                      <div class="bodyBox">
                        <button
                          class="btn btn-secondary startCopy w-100 d-flex align-items-center justify-content-center disabled"
                        >
                          <img
                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOS4wNTciIGhlaWdodD0iMTkuMDU3IiB2aWV3Qm94PSIwIDAgMTkuMDU3IDE5LjA1NyI+CiAgPHBhdGggaWQ9IlBhdGhfMzQ1NDkiIGRhdGEtbmFtZT0iUGF0aCAzNDU0OSIgZD0iTTExLjUyOCwyYTkuNTI4LDkuNTI4LDAsMSwwLDkuNTI4LDkuNTI4QTkuNTI4LDkuNTI4LDAsMCwwLDExLjUyOCwyWm00LjkyMyw5LjhMOC44MjksMTYuMjQ5YS4zMTguMzE4LDAsMCwxLS40NzYtLjI3NFY3LjA4MmEuMzE4LjMxOCwwLDAsMSwuNDc2LS4yNzRsNy42MjMsNC40NDdhLjMxOC4zMTgsMCwwLDEsMCwuNTQ5WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIgLTIpIiBmaWxsPSIjZmZmIi8+Cjwvc3ZnPgo="
                          />
                          <span class="ml-2">Bắt đầu sao chép</span>
                        </button>
                      </div>
                      <div class="footerBox">
                        <p class="mb-0">
                          <span class="text mr-1">Đầu tư tối thiểu</span
                          ><span class="number">$50.00</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-lg-6 col-xl-4">
                  <div class="communityItem">
                    <div class="boxProfile">
                      <div class="headerBox d-flex">
                        <img
                          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgdmlld0JveD0iMCAwIDgwIDgwIj4KICA8ZyBpZD0iR3JvdXBfMjA5OTgiIGRhdGEtbmFtZT0iR3JvdXAgMjA5OTgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMzg5IC0wLjQ0MykiPgogICAgPGcgaWQ9Ikdyb3VwXzIwOTg2IiBkYXRhLW5hbWU9Ikdyb3VwIDIwOTg2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC4zODkpIj4KICAgICAgPGcgaWQ9Ikdyb3VwXzIwOTgyIiBkYXRhLW5hbWU9Ikdyb3VwIDIwOTgyIj4KICAgICAgICA8Y2lyY2xlIGlkPSJFbGxpcHNlXzE5MTgiIGRhdGEtbmFtZT0iRWxsaXBzZSAxOTE4IiBjeD0iNDAiIGN5PSI0MCIgcj0iNDAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMC40NDMpIiBmaWxsPSIjZWNmNGZmIi8+CiAgICAgIDwvZz4KICAgICAgPGcgaWQ9Ikdyb3VwXzIwOTgzIiBkYXRhLW5hbWU9Ikdyb3VwIDIwOTgzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4LjM0OCA3Ljg3NCkiPgogICAgICAgIDxwYXRoIGlkPSJQYXRoXzM0ODg1IiBkYXRhLW5hbWU9IlBhdGggMzQ4ODUiIGQ9Ik0xMDYuMzM1LDUwLjc1OWEzOS43MTQsMzkuNzE0LDAsMCwxLTU1LjU3Niw1NS41NzYsMzkuNzEzLDM5LjcxMywwLDEsMCw1NS41NzYtNTUuNTc2WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTUwLjc1OSAtNTAuNzU5KSIgZmlsbD0iI2RkZWFmYiIvPgogICAgICA8L2c+CiAgICAgIDxnIGlkPSJHcm91cF8yMDk4NCIgZGF0YS1uYW1lPSJHcm91cCAyMDk4NCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOS45MDYgNTIuNzI2KSI+CiAgICAgICAgPHBhdGggaWQ9IlBhdGhfMzQ4ODYiIGRhdGEtbmFtZT0iUGF0aCAzNDg4NiIgZD0iTTEyMS4zNjUsMzUyLjU3OUEyMC45NDUsMjAuOTQ1LDAsMCwwLDEwMi4xMTksMzM5LjlIODAuMDU0YTIwLjk0NSwyMC45NDUsMCwwLDAtMTkuMjQ2LDEyLjY3NiwzOS43MDUsMzkuNzA1LDAsMCwwLDYwLjU1NywwWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTYwLjgwOCAtMzM5LjkwMykiIGZpbGw9IiM1MjQ3OTgiLz4KICAgICAgPC9nPgogICAgICA8ZyBpZD0iR3JvdXBfMjA5ODUiIGRhdGEtbmFtZT0iR3JvdXAgMjA5ODUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDkuOTA2IDU2LjQyMSkiPgogICAgICAgIDxwYXRoIGlkPSJQYXRoXzM0ODg3IiBkYXRhLW5hbWU9IlBhdGggMzQ4ODciIGQ9Ik0xMjEuMzY1LDM3Mi43YTIxLjAxOSwyMS4wMTksMCwwLDAtNy4zNy04Ljk4MUEzOS43MTcsMzkuNzE3LDAsMCwxLDYxLjEsMzcyLjA1MmMtLjEuMjE1LS4yLjQzMS0uMjk0LjY1YTM5LjcwNSwzOS43MDUsMCwwLDAsNjAuNTU3LDBaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjAuODA4IC0zNjMuNzIxKSIgZmlsbD0iIzQ1M2Q4MSIvPgogICAgICA8L2c+CiAgICA8L2c+CiAgICA8ZyBpZD0iR3JvdXBfMjA5ODciIGRhdGEtbmFtZT0iR3JvdXAgMjA5ODciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI1LjM5MyA3Ljg2MikiPgogICAgICA8cGF0aCBpZD0iUGF0aF8zNDg4OCIgZGF0YS1uYW1lPSJQYXRoIDM0ODg4IiBkPSJNMTkxLjQsNTUuODE1bC0zLjUwOS0zLjMzNmE2LjUyNCw2LjUyNCwwLDAsMC02LjU5NS0xLjQ0OWwtMTIuNjA2LDQuMjg1YTguMTY1LDguMTY1LDAsMCwwLTUuNTM3LDcuNzMxdjUuODQybC42MjEsMS44MTRoMjguNDU5bC42Mi0xLjgxNFY1OS4yQTQuNjc2LDQuNjc2LDAsMCwwLDE5MS40LDU1LjgxNVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNjMuMTQ5IC01MC42ODIpIiBmaWxsPSIjZmZkMDY0Ii8+CiAgICA8L2c+CiAgICA8ZyBpZD0iR3JvdXBfMjA5ODgiIGRhdGEtbmFtZT0iR3JvdXAgMjA5ODgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM4Ljc0OSA3Ljg2MikiPgogICAgICA8cGF0aCBpZD0iUGF0aF8zNDg4OSIgZGF0YS1uYW1lPSJQYXRoIDM0ODg5IiBkPSJNMjY0LjE0LDU1LjgxNWwtMy41MDktMy4zMzZhNi41MjQsNi41MjQsMCwwLDAtNi41OTUtMS40NDlsLTQuNzg3LDEuNjI3YTYuNTIyLDYuNTIyLDAsMCwxLDMuOTQ4LDEuNzcybDMuNTA5LDMuMzM2YTQuNjc1LDQuNjc1LDAsMCwxLDEuNDU0LDMuMzg4VjcwLjdoNi44MTRsLjYyLTEuODE0VjU5LjJhNC42NzYsNC42NzYsMCwwLDAtMS40NTQtMy4zODhaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjQ5LjI0OSAtNTAuNjgyKSIgZmlsbD0iI2ZmYzI1MCIvPgogICAgPC9nPgogICAgPGcgaWQ9Ikdyb3VwXzIwOTg5IiBkYXRhLW5hbWU9Ikdyb3VwIDIwOTg5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1Mi45ODggMjguMTk1KSI+CiAgICAgIDxwYXRoIGlkPSJQYXRoXzM0ODkwIiBkYXRhLW5hbWU9IlBhdGggMzQ4OTAiIGQ9Ik0zNDIuMiwxODQuOTY1Yy0xLjUyMiwzLjIzMS0xLjY1Myw3LjUyNy4yNTgsOC40MjdzNS4xMzktMS45MzgsNi42NjEtNS4xNjkuNTM4LTUuMTYxLTEuMzcyLTYuMDYxUzM0My43MjEsMTgxLjczNCwzNDIuMiwxODQuOTY1WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTM0MS4wNCAtMTgxLjc2KSIgZmlsbD0iI2ZmY2JiZSIvPgogICAgPC9nPgogICAgPGcgaWQ9Ikdyb3VwXzIwOTkwIiBkYXRhLW5hbWU9Ikdyb3VwIDIwOTkwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyOS44MjUgNDMuNjQ4KSI+CiAgICAgIDxwYXRoIGlkPSJQYXRoXzM0ODkxIiBkYXRhLW5hbWU9IlBhdGggMzQ4OTEiIGQ9Ik0yMDMuOTU0LDI5OS40NTdoLTMuNjMzYTguNiw4LjYsMCwwLDEtOC42LTguNlYyODEuMzhoMjAuODM2djkuNDc2QTguNiw4LjYsMCwwLDEsMjAzLjk1NCwyOTkuNDU3WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE5MS43MTkgLTI4MS4zOCkiIGZpbGw9IiNlYWFjOWQiLz4KICAgIDwvZz4KICAgIDxwYXRoIGlkPSJQYXRoXzM0ODkyIiBkYXRhLW5hbWU9IlBhdGggMzQ4OTIiIGQ9Ik0yNDUuNTgyLDI4MS4zOHY5LjQ3NmE4LjYsOC42LDAsMCwxLTcuMjMzLDguNDkyLDguNjY4LDguNjY4LDAsMCwwLDEuMzY4LjExaDMuNjMzYTguNiw4LjYsMCwwLDAsOC42LTguNlYyODEuMzhaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjAxLjI5MSAtMjM3LjczMikiIGZpbGw9IiNkZjkzODAiLz4KICAgIDxnIGlkPSJHcm91cF8yMDk5MSIgZGF0YS1uYW1lPSJHcm91cCAyMDk5MSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjUuMzkzIDIzLjM2OSkiPgogICAgICA8cGF0aCBpZD0iUGF0aF8zNDg5MyIgZGF0YS1uYW1lPSJQYXRoIDM0ODkzIiBkPSJNMTkwLjE1LDE1MC42NTNIMTY1Ljg0NGEyLjcsMi43LDAsMCwwLTIuNywyLjd2OS42YTE1LjY5MywxNS42OTMsMCwwLDAsNi45MzksMTMuMDI1bDQuMzE2LDIuOWE2LjQ0Niw2LjQ0NiwwLDAsMCwxLjM4Ny43MDYsMjEuMTcyLDIxLjE3MiwwLDAsMCwzLjAyOS0uMDQ5LDE1LjQ4NiwxNS40ODYsMCwwLDAsMy4yMjgtLjk2MmwzLjg2My0yLjZhMTUuNjkzLDE1LjY5MywwLDAsMCw2LjkzOS0xMy4wMjV2LTkuNmEyLjcsMi43LDAsMCwwLTIuNy0yLjdaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTYzLjE0NyAtMTUwLjY1MykiIGZpbGw9IiNmZmNiYmUiLz4KICAgIDwvZz4KICAgIDxnIGlkPSJHcm91cF8yMDk5MiIgZGF0YS1uYW1lPSJHcm91cCAyMDk5MiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzguMDM1IDIzLjM2OSkiPgogICAgICA8cGF0aCBpZD0iUGF0aF8zNDg5NCIgZGF0YS1uYW1lPSJQYXRoIDM0ODk0IiBkPSJNMjU3LjI4OSwxNTAuNjUydjEyLjNhMTUuNjk0LDE1LjY5NCwwLDAsMS02LjkzOSwxMy4wMjVsLTQuMzE2LDIuOWE2LjQ1NSw2LjQ1NSwwLDAsMS0xLjM4OS43MDYsNi40NDcsNi40NDcsMCwwLDAsNS44LS43MDZsNC4zMTYtMi45YTE1LjY5MywxNS42OTMsMCwwLDAsNi45MzktMTMuMDI1di05LjZhMi43LDIuNywwLDAsMC0yLjctMi43aC0xLjcxN1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yNDQuNjQ1IC0xNTAuNjUyKSIgZmlsbD0iI2VhYWM5ZCIvPgogICAgPC9nPgogICAgPGcgaWQ9Ikdyb3VwXzIwOTkzIiBkYXRhLW5hbWU9Ikdyb3VwIDIwOTkzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1Mi45ODggMjguMTk1KSI+CiAgICAgIDxwYXRoIGlkPSJQYXRoXzM0ODk1IiBkYXRhLW5hbWU9IlBhdGggMzQ4OTUiIGQ9Ik0zNDIuMiwxODQuOTY1Yy0xLjUyMiwzLjIzMS0xLjY1Myw3LjUyNy4yNTgsOC40MjdzNS4xMzktMS45MzgsNi42NjEtNS4xNjkuNTM4LTUuMTYxLTEuMzcyLTYuMDYxUzM0My43MjEsMTgxLjczNCwzNDIuMiwxODQuOTY1WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTM0MS4wNCAtMTgxLjc2KSIgZmlsbD0iI2VhYWM5ZCIvPgogICAgPC9nPgogICAgPGcgaWQ9Ikdyb3VwXzIwOTk0IiBkYXRhLW5hbWU9Ikdyb3VwIDIwOTk0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxOC42NzYgMjguMTk1KSI+CiAgICAgIDxwYXRoIGlkPSJQYXRoXzM0ODk2IiBkYXRhLW5hbWU9IlBhdGggMzQ4OTYiIGQ9Ik0xMjcuNTA5LDE4NC45NjVjMS41MjIsMy4yMzEsMS42NTMsNy41MjctLjI1OCw4LjQyN3MtNS4xMzktMS45MzgtNi42NjEtNS4xNjktLjUzOC01LjE2MSwxLjM3Mi02LjA2MVMxMjUuOTg3LDE4MS43MzQsMTI3LjUwOSwxODQuOTY1WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTExOS44NDUgLTE4MS43NikiIGZpbGw9IiNmZmNiYmUiLz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPgo="
                          width="84"
                          height="84"
                          class="avatar"
                        />
                        <div class="profile align-self-center w-100">
                          <p class="name mb-2">Tonynguyen</p>
                          <div class="d-flex w-100">
                            <div class="label orange mr-2">
                              <div class="d-flex align-items-center">
                                <img
                                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTMuNDAxIiBoZWlnaHQ9IjEzLjQwMSIgdmlld0JveD0iMCAwIDEzLjQwMSAxMy40MDEiPgogIDxkZWZzPgogICAgPGNsaXBQYXRoIGlkPSJjbGlwLXBhdGgiPgogICAgICA8cGF0aCBpZD0iUGF0aF8zNDUzNyIgZGF0YS1uYW1lPSJQYXRoIDM0NTM3IiBkPSJNMCwwSDEzLjRWMTMuNEgwWiIgZmlsbD0iI2ZmZiIvPgogICAgPC9jbGlwUGF0aD4KICA8L2RlZnM+CiAgPGcgaWQ9Im1hc3Rlci1leHBlcmllbmNlXzUiIGNsaXAtcGF0aD0idXJsKCNjbGlwLXBhdGgpIj4KICAgIDxwYXRoIGlkPSJQYXRoXzM0NTM2IiBkYXRhLW5hbWU9IlBhdGggMzQ1MzYiIGQ9Ik03LjE1MywzLjEsNy43LDQuODU0YS40OTEuNDkxLDAsMCwwLC40Ni4zNWgxLjc3YS41MS41MSwwLDAsMSwuMjgzLjkxNkw4Ljc4Miw3LjIwNmEuNTI1LjUyNSwwLDAsMC0uMTc5LjU2NmwuNTQzLDEuNzU3YS40ODkuNDg5LDAsMCwxLS43NDQuNTY2TDYuOTc1LDkuMDA4YS40NzkuNDc5LDAsMCwwLS41NzMsMGwtMS40MiwxLjA4N2EuNDg4LjQ4OCwwLDAsMS0uNzQ0LS41NjZsLjU0My0xLjc1N0EuNTE0LjUxNCwwLDAsMCw0LjYsNy4yMDZMMy4xNzUsNi4xMTlBLjUxLjUxLDAsMCwxLDMuNDU4LDUuMmgxLjc3YS40OTIuNDkyLDAsMCwwLC40NjItLjM1TDYuMjMxLDMuMWEuNDc4LjQ3OCwwLDAsMSwuOTIyLDBaTTIuOTc0LDkuODI1QTUuOTQzLDUuOTQzLDAsMCwxLDIuMjgyLDguNDEsMS41NDIsMS41NDIsMCwwLDAsLjgxOCw3LjM1M0gwQTguMjUsOC4yNSwwLDAsMCwuNDMxLDkuMjgxYTEuNSwxLjUsMCwwLDAsMi41NDMuNTQzWk0xMS4xLDguNDFhNS45NjksNS45NjksMCwwLDEtLjY5MiwxLjQxNSwxLjUsMS41LDAsMCwwLDIuNTQ0LS41NDMsOC4yNDksOC4yNDksMCwwLDAsLjQzMS0xLjkyOGgtLjgxOUExLjU0OSwxLjU0OSwwLDAsMCwxMS4xLDguNDFaTTUuOTQ5LDExLjY2M2E1LjE5Myw1LjE5MywwLDAsMS0xLjQyLS40NTQsMS40NjYsMS40NjYsMCwwLDAtMS43LjM1bC0uNTk1LjYxOGE3LjIxLDcuMjEsMCwwLDAsMS41NDcuOTksMS41NjgsMS41NjgsMCwwLDAsMi4xNzItMS41Wm0yLjkwNy0uNDU0YTUuMiw1LjIsMCwwLDEtMS40Mi40NTQsMS41NjQsMS41NjQsMCwwLDAsMi4xNjQsMS41LDcuMDE0LDcuMDE0LDAsMCwwLDEuNTQ3LS45OWwtLjYtLjYxOEExLjQ1MSwxLjQ1MSwwLDAsMCw4Ljg1NywxMS4yMDlabTIuNDYyLTYuODQyYTUuNzY5LDUuNzY5LDAsMCwxLC41MDYsMS40ODksMS40OTQsMS40OTQsMCwwLDAsMS40MTMtMi4xODEsOC42NDUsOC42NDUsMCwwLDAtMS4wNTYtMS42NjhsLS41OC41NzNhMS41NjUsMS41NjUsMCwwLDAtLjI4MywxLjc4N1ptLTkuMjI5LDBhNS42NjgsNS42NjgsMCwwLDAtLjUxMywxLjQ4OUExLjQ5NCwxLjQ5NCwwLDAsMSwuMTYzLDMuNjc1LDguNjY1LDguNjY1LDAsMCwxLDEuMjIsMmwuNTguNTgxYTEuNTU1LDEuNTU1LDAsMCwxLC4yOSwxLjc4N1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAxIC0wLjUxMSkiIGZpbGw9IiNmZmYiLz4KICA8L2c+Cjwvc3ZnPgo="
                                  class="mr-2"
                                />
                                <span>Chuyên gia</span>
                              </div>
                            </div>
                            <!---->
                          </div>
                        </div>
                      </div>
                      <div class="bodyBox mb-015rem numberContent">
                        <div class="d-flex w-100">
                          <div class="flexBox">
                            <p class="number gain green">95%</p>
                            <p class="title">Lợi nhuận (30N)</p>
                          </div>
                          <div class="flexBox">
                            <p class="number">0</p>
                            <p class="title">Người sao chép</p>
                          </div>
                          <div class="flexBox">
                            <p class="number">5%</p>
                            <p class="title">Chia sẻ ln</p>
                          </div>
                        </div>
                      </div>
                      <div class="bodyBox">
                        <button
                          class="btn btn-secondary startCopy w-100 d-flex align-items-center justify-content-center disabled"
                        >
                          <img
                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOS4wNTciIGhlaWdodD0iMTkuMDU3IiB2aWV3Qm94PSIwIDAgMTkuMDU3IDE5LjA1NyI+CiAgPHBhdGggaWQ9IlBhdGhfMzQ1NDkiIGRhdGEtbmFtZT0iUGF0aCAzNDU0OSIgZD0iTTExLjUyOCwyYTkuNTI4LDkuNTI4LDAsMSwwLDkuNTI4LDkuNTI4QTkuNTI4LDkuNTI4LDAsMCwwLDExLjUyOCwyWm00LjkyMyw5LjhMOC44MjksMTYuMjQ5YS4zMTguMzE4LDAsMCwxLS40NzYtLjI3NFY3LjA4MmEuMzE4LjMxOCwwLDAsMSwuNDc2LS4yNzRsNy42MjMsNC40NDdhLjMxOC4zMTgsMCwwLDEsMCwuNTQ5WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIgLTIpIiBmaWxsPSIjZmZmIi8+Cjwvc3ZnPgo="
                          />
                          <span class="ml-2">Bắt đầu sao chép</span>
                        </button>
                      </div>
                      <div class="footerBox">
                        <p class="mb-0">
                          <span class="text mr-1">Đầu tư tối thiểu</span
                          ><span class="number">$10.00</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-lg-6 col-xl-4">
                  <div class="communityItem">
                    <div class="boxProfile">
                      <div class="headerBox d-flex">
                        <img
                          src="https://projgapidiagnostics.blob.core.windows.net/kyc-data/1589449271541/avatar/387d1f02-b2a0-4ec3-ab68-a05532469b22_thumbnail.jpg?sv=2016-05-31&amp;sig=dXgf18yFQIsYlHKTWr6zGUl1pWHbae9v%2BdZDEVkhgqo%3D&amp;spr=https&amp;se=2020-10-15T10%3A31%3A33Z&amp;srt=o&amp;ss=bf&amp;sp=r"
                          width="84"
                          height="84"
                          class="avatar"
                        />
                        <div class="profile align-self-center w-100">
                          <p class="name mb-2">laclac1234</p>
                          <div class="d-flex w-100">
                            <div class="label orange mr-2">
                              <div class="d-flex align-items-center">
                                <img
                                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTMuNDAxIiBoZWlnaHQ9IjEzLjQwMSIgdmlld0JveD0iMCAwIDEzLjQwMSAxMy40MDEiPgogIDxkZWZzPgogICAgPGNsaXBQYXRoIGlkPSJjbGlwLXBhdGgiPgogICAgICA8cGF0aCBpZD0iUGF0aF8zNDUzNyIgZGF0YS1uYW1lPSJQYXRoIDM0NTM3IiBkPSJNMCwwSDEzLjRWMTMuNEgwWiIgZmlsbD0iI2ZmZiIvPgogICAgPC9jbGlwUGF0aD4KICA8L2RlZnM+CiAgPGcgaWQ9Im1hc3Rlci1leHBlcmllbmNlXzUiIGNsaXAtcGF0aD0idXJsKCNjbGlwLXBhdGgpIj4KICAgIDxwYXRoIGlkPSJQYXRoXzM0NTM2IiBkYXRhLW5hbWU9IlBhdGggMzQ1MzYiIGQ9Ik03LjE1MywzLjEsNy43LDQuODU0YS40OTEuNDkxLDAsMCwwLC40Ni4zNWgxLjc3YS41MS41MSwwLDAsMSwuMjgzLjkxNkw4Ljc4Miw3LjIwNmEuNTI1LjUyNSwwLDAsMC0uMTc5LjU2NmwuNTQzLDEuNzU3YS40ODkuNDg5LDAsMCwxLS43NDQuNTY2TDYuOTc1LDkuMDA4YS40NzkuNDc5LDAsMCwwLS41NzMsMGwtMS40MiwxLjA4N2EuNDg4LjQ4OCwwLDAsMS0uNzQ0LS41NjZsLjU0My0xLjc1N0EuNTE0LjUxNCwwLDAsMCw0LjYsNy4yMDZMMy4xNzUsNi4xMTlBLjUxLjUxLDAsMCwxLDMuNDU4LDUuMmgxLjc3YS40OTIuNDkyLDAsMCwwLC40NjItLjM1TDYuMjMxLDMuMWEuNDc4LjQ3OCwwLDAsMSwuOTIyLDBaTTIuOTc0LDkuODI1QTUuOTQzLDUuOTQzLDAsMCwxLDIuMjgyLDguNDEsMS41NDIsMS41NDIsMCwwLDAsLjgxOCw3LjM1M0gwQTguMjUsOC4yNSwwLDAsMCwuNDMxLDkuMjgxYTEuNSwxLjUsMCwwLDAsMi41NDMuNTQzWk0xMS4xLDguNDFhNS45NjksNS45NjksMCwwLDEtLjY5MiwxLjQxNSwxLjUsMS41LDAsMCwwLDIuNTQ0LS41NDMsOC4yNDksOC4yNDksMCwwLDAsLjQzMS0xLjkyOGgtLjgxOUExLjU0OSwxLjU0OSwwLDAsMCwxMS4xLDguNDFaTTUuOTQ5LDExLjY2M2E1LjE5Myw1LjE5MywwLDAsMS0xLjQyLS40NTQsMS40NjYsMS40NjYsMCwwLDAtMS43LjM1bC0uNTk1LjYxOGE3LjIxLDcuMjEsMCwwLDAsMS41NDcuOTksMS41NjgsMS41NjgsMCwwLDAsMi4xNzItMS41Wm0yLjkwNy0uNDU0YTUuMiw1LjIsMCwwLDEtMS40Mi40NTQsMS41NjQsMS41NjQsMCwwLDAsMi4xNjQsMS41LDcuMDE0LDcuMDE0LDAsMCwwLDEuNTQ3LS45OWwtLjYtLjYxOEExLjQ1MSwxLjQ1MSwwLDAsMCw4Ljg1NywxMS4yMDlabTIuNDYyLTYuODQyYTUuNzY5LDUuNzY5LDAsMCwxLC41MDYsMS40ODksMS40OTQsMS40OTQsMCwwLDAsMS40MTMtMi4xODEsOC42NDUsOC42NDUsMCwwLDAtMS4wNTYtMS42NjhsLS41OC41NzNhMS41NjUsMS41NjUsMCwwLDAtLjI4MywxLjc4N1ptLTkuMjI5LDBhNS42NjgsNS42NjgsMCwwLDAtLjUxMywxLjQ4OUExLjQ5NCwxLjQ5NCwwLDAsMSwuMTYzLDMuNjc1LDguNjY1LDguNjY1LDAsMCwxLDEuMjIsMmwuNTguNTgxYTEuNTU1LDEuNTU1LDAsMCwxLC4yOSwxLjc4N1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAxIC0wLjUxMSkiIGZpbGw9IiNmZmYiLz4KICA8L2c+Cjwvc3ZnPgo="
                                  class="mr-2"
                                />
                                <span>Chuyên gia</span>
                              </div>
                            </div>
                            <!---->
                          </div>
                        </div>
                      </div>
                      <div class="bodyBox mb-015rem numberContent">
                        <div class="d-flex w-100">
                          <div class="flexBox">
                            <p class="number gain green">95%</p>
                            <p class="title">Lợi nhuận (30N)</p>
                          </div>
                          <div class="flexBox">
                            <p class="number">0</p>
                            <p class="title">Người sao chép</p>
                          </div>
                          <div class="flexBox">
                            <p class="number">10%</p>
                            <p class="title">Chia sẻ ln</p>
                          </div>
                        </div>
                      </div>
                      <div class="bodyBox">
                        <button
                          class="btn btn-secondary startCopy w-100 d-flex align-items-center justify-content-center disabled"
                        >
                          <img
                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOS4wNTciIGhlaWdodD0iMTkuMDU3IiB2aWV3Qm94PSIwIDAgMTkuMDU3IDE5LjA1NyI+CiAgPHBhdGggaWQ9IlBhdGhfMzQ1NDkiIGRhdGEtbmFtZT0iUGF0aCAzNDU0OSIgZD0iTTExLjUyOCwyYTkuNTI4LDkuNTI4LDAsMSwwLDkuNTI4LDkuNTI4QTkuNTI4LDkuNTI4LDAsMCwwLDExLjUyOCwyWm00LjkyMyw5LjhMOC44MjksMTYuMjQ5YS4zMTguMzE4LDAsMCwxLS40NzYtLjI3NFY3LjA4MmEuMzE4LjMxOCwwLDAsMSwuNDc2LS4yNzRsNy42MjMsNC40NDdhLjMxOC4zMTgsMCwwLDEsMCwuNTQ5WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIgLTIpIiBmaWxsPSIjZmZmIi8+Cjwvc3ZnPgo="
                          />
                          <span class="ml-2">Bắt đầu sao chép</span>
                        </button>
                      </div>
                      <div class="footerBox">
                        <p class="mb-0">
                          <span class="text mr-1">Đầu tư tối thiểu</span
                          ><span class="number">$25.00</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-lg-6 col-xl-4">
                  <div class="communityItem">
                    <div class="boxProfile">
                      <div class="headerBox d-flex">
                        <img
                          src="https://projgapidiagnostics.blob.core.windows.net/kyc-data/1593503736483/avatar/5cd25adb-b9c0-4975-bff3-5014b271a216_thumbnail.jpg?sv=2016-05-31&amp;sig=dXgf18yFQIsYlHKTWr6zGUl1pWHbae9v%2BdZDEVkhgqo%3D&amp;spr=https&amp;se=2020-10-15T10%3A31%3A33Z&amp;srt=o&amp;ss=bf&amp;sp=r"
                          width="84"
                          height="84"
                          class="avatar"
                        />
                        <div class="profile align-self-center w-100">
                          <p class="name mb-2">Tony6789</p>
                          <div class="d-flex w-100">
                            <div class="label orange mr-2">
                              <div class="d-flex align-items-center">
                                <img
                                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTMuNDAxIiBoZWlnaHQ9IjEzLjQwMSIgdmlld0JveD0iMCAwIDEzLjQwMSAxMy40MDEiPgogIDxkZWZzPgogICAgPGNsaXBQYXRoIGlkPSJjbGlwLXBhdGgiPgogICAgICA8cGF0aCBpZD0iUGF0aF8zNDUzNyIgZGF0YS1uYW1lPSJQYXRoIDM0NTM3IiBkPSJNMCwwSDEzLjRWMTMuNEgwWiIgZmlsbD0iI2ZmZiIvPgogICAgPC9jbGlwUGF0aD4KICA8L2RlZnM+CiAgPGcgaWQ9Im1hc3Rlci1leHBlcmllbmNlXzUiIGNsaXAtcGF0aD0idXJsKCNjbGlwLXBhdGgpIj4KICAgIDxwYXRoIGlkPSJQYXRoXzM0NTM2IiBkYXRhLW5hbWU9IlBhdGggMzQ1MzYiIGQ9Ik03LjE1MywzLjEsNy43LDQuODU0YS40OTEuNDkxLDAsMCwwLC40Ni4zNWgxLjc3YS41MS41MSwwLDAsMSwuMjgzLjkxNkw4Ljc4Miw3LjIwNmEuNTI1LjUyNSwwLDAsMC0uMTc5LjU2NmwuNTQzLDEuNzU3YS40ODkuNDg5LDAsMCwxLS43NDQuNTY2TDYuOTc1LDkuMDA4YS40NzkuNDc5LDAsMCwwLS41NzMsMGwtMS40MiwxLjA4N2EuNDg4LjQ4OCwwLDAsMS0uNzQ0LS41NjZsLjU0My0xLjc1N0EuNTE0LjUxNCwwLDAsMCw0LjYsNy4yMDZMMy4xNzUsNi4xMTlBLjUxLjUxLDAsMCwxLDMuNDU4LDUuMmgxLjc3YS40OTIuNDkyLDAsMCwwLC40NjItLjM1TDYuMjMxLDMuMWEuNDc4LjQ3OCwwLDAsMSwuOTIyLDBaTTIuOTc0LDkuODI1QTUuOTQzLDUuOTQzLDAsMCwxLDIuMjgyLDguNDEsMS41NDIsMS41NDIsMCwwLDAsLjgxOCw3LjM1M0gwQTguMjUsOC4yNSwwLDAsMCwuNDMxLDkuMjgxYTEuNSwxLjUsMCwwLDAsMi41NDMuNTQzWk0xMS4xLDguNDFhNS45NjksNS45NjksMCwwLDEtLjY5MiwxLjQxNSwxLjUsMS41LDAsMCwwLDIuNTQ0LS41NDMsOC4yNDksOC4yNDksMCwwLDAsLjQzMS0xLjkyOGgtLjgxOUExLjU0OSwxLjU0OSwwLDAsMCwxMS4xLDguNDFaTTUuOTQ5LDExLjY2M2E1LjE5Myw1LjE5MywwLDAsMS0xLjQyLS40NTQsMS40NjYsMS40NjYsMCwwLDAtMS43LjM1bC0uNTk1LjYxOGE3LjIxLDcuMjEsMCwwLDAsMS41NDcuOTksMS41NjgsMS41NjgsMCwwLDAsMi4xNzItMS41Wm0yLjkwNy0uNDU0YTUuMiw1LjIsMCwwLDEtMS40Mi40NTQsMS41NjQsMS41NjQsMCwwLDAsMi4xNjQsMS41LDcuMDE0LDcuMDE0LDAsMCwwLDEuNTQ3LS45OWwtLjYtLjYxOEExLjQ1MSwxLjQ1MSwwLDAsMCw4Ljg1NywxMS4yMDlabTIuNDYyLTYuODQyYTUuNzY5LDUuNzY5LDAsMCwxLC41MDYsMS40ODksMS40OTQsMS40OTQsMCwwLDAsMS40MTMtMi4xODEsOC42NDUsOC42NDUsMCwwLDAtMS4wNTYtMS42NjhsLS41OC41NzNhMS41NjUsMS41NjUsMCwwLDAtLjI4MywxLjc4N1ptLTkuMjI5LDBhNS42NjgsNS42NjgsMCwwLDAtLjUxMywxLjQ4OUExLjQ5NCwxLjQ5NCwwLDAsMSwuMTYzLDMuNjc1LDguNjY1LDguNjY1LDAsMCwxLDEuMjIsMmwuNTguNTgxYTEuNTU1LDEuNTU1LDAsMCwxLC4yOSwxLjc4N1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAxIC0wLjUxMSkiIGZpbGw9IiNmZmYiLz4KICA8L2c+Cjwvc3ZnPgo="
                                  class="mr-2"
                                />
                                <span>Chuyên gia</span>
                              </div>
                            </div>
                            <!---->
                          </div>
                        </div>
                      </div>
                      <div class="bodyBox mb-015rem numberContent">
                        <div class="d-flex w-100">
                          <div class="flexBox">
                            <p class="number gain green">95%</p>
                            <p class="title">Lợi nhuận (30N)</p>
                          </div>
                          <div class="flexBox">
                            <p class="number">0</p>
                            <p class="title">Người sao chép</p>
                          </div>
                          <div class="flexBox">
                            <p class="number">10%</p>
                            <p class="title">Chia sẻ ln</p>
                          </div>
                        </div>
                      </div>
                      <div class="bodyBox">
                        <button
                          class="btn btn-secondary startCopy w-100 d-flex align-items-center justify-content-center disabled"
                        >
                          <img
                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOS4wNTciIGhlaWdodD0iMTkuMDU3IiB2aWV3Qm94PSIwIDAgMTkuMDU3IDE5LjA1NyI+CiAgPHBhdGggaWQ9IlBhdGhfMzQ1NDkiIGRhdGEtbmFtZT0iUGF0aCAzNDU0OSIgZD0iTTExLjUyOCwyYTkuNTI4LDkuNTI4LDAsMSwwLDkuNTI4LDkuNTI4QTkuNTI4LDkuNTI4LDAsMCwwLDExLjUyOCwyWm00LjkyMyw5LjhMOC44MjksMTYuMjQ5YS4zMTguMzE4LDAsMCwxLS40NzYtLjI3NFY3LjA4MmEuMzE4LjMxOCwwLDAsMSwuNDc2LS4yNzRsNy42MjMsNC40NDdhLjMxOC4zMTgsMCwwLDEsMCwuNTQ5WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIgLTIpIiBmaWxsPSIjZmZmIi8+Cjwvc3ZnPgo="
                          />
                          <span class="ml-2">Bắt đầu sao chép</span>
                        </button>
                      </div>
                      <div class="footerBox">
                        <p class="mb-0">
                          <span class="text mr-1">Đầu tư tối thiểu</span
                          ><span class="number">$25.00</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-lg-6 col-xl-4">
                  <div class="communityItem">
                    <div class="boxProfile">
                      <div class="headerBox d-flex">
                        <img
                          src="https://projgapidiagnostics.blob.core.windows.net/kyc-data/1594545333462/avatar/117aee70-0dfb-40b6-878f-0f94833f96db_thumbnail.jpg?sv=2016-05-31&amp;sig=dXgf18yFQIsYlHKTWr6zGUl1pWHbae9v%2BdZDEVkhgqo%3D&amp;spr=https&amp;se=2020-10-15T10%3A31%3A33Z&amp;srt=o&amp;ss=bf&amp;sp=r"
                          width="84"
                          height="84"
                          class="avatar"
                        />
                        <div class="profile align-self-center w-100">
                          <p class="name mb-2">bean88</p>
                          <div class="d-flex w-100">
                            <div class="label orange mr-2">
                              <div class="d-flex align-items-center">
                                <img
                                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTMuNDAxIiBoZWlnaHQ9IjEzLjQwMSIgdmlld0JveD0iMCAwIDEzLjQwMSAxMy40MDEiPgogIDxkZWZzPgogICAgPGNsaXBQYXRoIGlkPSJjbGlwLXBhdGgiPgogICAgICA8cGF0aCBpZD0iUGF0aF8zNDUzNyIgZGF0YS1uYW1lPSJQYXRoIDM0NTM3IiBkPSJNMCwwSDEzLjRWMTMuNEgwWiIgZmlsbD0iI2ZmZiIvPgogICAgPC9jbGlwUGF0aD4KICA8L2RlZnM+CiAgPGcgaWQ9Im1hc3Rlci1leHBlcmllbmNlXzUiIGNsaXAtcGF0aD0idXJsKCNjbGlwLXBhdGgpIj4KICAgIDxwYXRoIGlkPSJQYXRoXzM0NTM2IiBkYXRhLW5hbWU9IlBhdGggMzQ1MzYiIGQ9Ik03LjE1MywzLjEsNy43LDQuODU0YS40OTEuNDkxLDAsMCwwLC40Ni4zNWgxLjc3YS41MS41MSwwLDAsMSwuMjgzLjkxNkw4Ljc4Miw3LjIwNmEuNTI1LjUyNSwwLDAsMC0uMTc5LjU2NmwuNTQzLDEuNzU3YS40ODkuNDg5LDAsMCwxLS43NDQuNTY2TDYuOTc1LDkuMDA4YS40NzkuNDc5LDAsMCwwLS41NzMsMGwtMS40MiwxLjA4N2EuNDg4LjQ4OCwwLDAsMS0uNzQ0LS41NjZsLjU0My0xLjc1N0EuNTE0LjUxNCwwLDAsMCw0LjYsNy4yMDZMMy4xNzUsNi4xMTlBLjUxLjUxLDAsMCwxLDMuNDU4LDUuMmgxLjc3YS40OTIuNDkyLDAsMCwwLC40NjItLjM1TDYuMjMxLDMuMWEuNDc4LjQ3OCwwLDAsMSwuOTIyLDBaTTIuOTc0LDkuODI1QTUuOTQzLDUuOTQzLDAsMCwxLDIuMjgyLDguNDEsMS41NDIsMS41NDIsMCwwLDAsLjgxOCw3LjM1M0gwQTguMjUsOC4yNSwwLDAsMCwuNDMxLDkuMjgxYTEuNSwxLjUsMCwwLDAsMi41NDMuNTQzWk0xMS4xLDguNDFhNS45NjksNS45NjksMCwwLDEtLjY5MiwxLjQxNSwxLjUsMS41LDAsMCwwLDIuNTQ0LS41NDMsOC4yNDksOC4yNDksMCwwLDAsLjQzMS0xLjkyOGgtLjgxOUExLjU0OSwxLjU0OSwwLDAsMCwxMS4xLDguNDFaTTUuOTQ5LDExLjY2M2E1LjE5Myw1LjE5MywwLDAsMS0xLjQyLS40NTQsMS40NjYsMS40NjYsMCwwLDAtMS43LjM1bC0uNTk1LjYxOGE3LjIxLDcuMjEsMCwwLDAsMS41NDcuOTksMS41NjgsMS41NjgsMCwwLDAsMi4xNzItMS41Wm0yLjkwNy0uNDU0YTUuMiw1LjIsMCwwLDEtMS40Mi40NTQsMS41NjQsMS41NjQsMCwwLDAsMi4xNjQsMS41LDcuMDE0LDcuMDE0LDAsMCwwLDEuNTQ3LS45OWwtLjYtLjYxOEExLjQ1MSwxLjQ1MSwwLDAsMCw4Ljg1NywxMS4yMDlabTIuNDYyLTYuODQyYTUuNzY5LDUuNzY5LDAsMCwxLC41MDYsMS40ODksMS40OTQsMS40OTQsMCwwLDAsMS40MTMtMi4xODEsOC42NDUsOC42NDUsMCwwLDAtMS4wNTYtMS42NjhsLS41OC41NzNhMS41NjUsMS41NjUsMCwwLDAtLjI4MywxLjc4N1ptLTkuMjI5LDBhNS42NjgsNS42NjgsMCwwLDAtLjUxMywxLjQ4OUExLjQ5NCwxLjQ5NCwwLDAsMSwuMTYzLDMuNjc1LDguNjY1LDguNjY1LDAsMCwxLDEuMjIsMmwuNTguNTgxYTEuNTU1LDEuNTU1LDAsMCwxLC4yOSwxLjc4N1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAxIC0wLjUxMSkiIGZpbGw9IiNmZmYiLz4KICA8L2c+Cjwvc3ZnPgo="
                                  class="mr-2"
                                />
                                <span>Chuyên gia</span>
                              </div>
                            </div>
                            <!---->
                          </div>
                        </div>
                      </div>
                      <div class="bodyBox mb-015rem numberContent">
                        <div class="d-flex w-100">
                          <div class="flexBox">
                            <p class="number gain green">56.84%</p>
                            <p class="title">Lợi nhuận (30N)</p>
                          </div>
                          <div class="flexBox">
                            <p class="number">0</p>
                            <p class="title">Người sao chép</p>
                          </div>
                          <div class="flexBox">
                            <p class="number">5%</p>
                            <p class="title">Chia sẻ ln</p>
                          </div>
                        </div>
                      </div>
                      <div class="bodyBox">
                        <button
                          class="btn btn-secondary startCopy w-100 d-flex align-items-center justify-content-center disabled"
                        >
                          <img
                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOS4wNTciIGhlaWdodD0iMTkuMDU3IiB2aWV3Qm94PSIwIDAgMTkuMDU3IDE5LjA1NyI+CiAgPHBhdGggaWQ9IlBhdGhfMzQ1NDkiIGRhdGEtbmFtZT0iUGF0aCAzNDU0OSIgZD0iTTExLjUyOCwyYTkuNTI4LDkuNTI4LDAsMSwwLDkuNTI4LDkuNTI4QTkuNTI4LDkuNTI4LDAsMCwwLDExLjUyOCwyWm00LjkyMyw5LjhMOC44MjksMTYuMjQ5YS4zMTguMzE4LDAsMCwxLS40NzYtLjI3NFY3LjA4MmEuMzE4LjMxOCwwLDAsMSwuNDc2LS4yNzRsNy42MjMsNC40NDdhLjMxOC4zMTgsMCwwLDEsMCwuNTQ5WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIgLTIpIiBmaWxsPSIjZmZmIi8+Cjwvc3ZnPgo="
                          />
                          <span class="ml-2">Bắt đầu sao chép</span>
                        </button>
                      </div>
                      <div class="footerBox">
                        <p class="mb-0">
                          <span class="text mr-1">Đầu tư tối thiểu</span
                          ><span class="number">$30.00</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-lg-6 col-xl-4">
                  <div class="communityItem">
                    <div class="boxProfile">
                      <div class="headerBox d-flex">
                        <img
                          src="https://projgapidiagnostics.blob.core.windows.net/kyc-data/1589984618711/avatar/117e0735-a4c9-46a5-8f21-ac928f863f6f.jpg?sv=2016-05-31&amp;sig=dXgf18yFQIsYlHKTWr6zGUl1pWHbae9v%2BdZDEVkhgqo%3D&amp;spr=https&amp;se=2020-10-15T10%3A31%3A33Z&amp;srt=o&amp;ss=bf&amp;sp=r"
                          width="84"
                          height="84"
                          class="avatar"
                        />
                        <div class="profile align-self-center w-100">
                          <p class="name mb-2">vuhuuich</p>
                          <div class="d-flex w-100">
                            <div class="label orange mr-2">
                              <div class="d-flex align-items-center">
                                <img
                                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTMuNDAxIiBoZWlnaHQ9IjEzLjQwMSIgdmlld0JveD0iMCAwIDEzLjQwMSAxMy40MDEiPgogIDxkZWZzPgogICAgPGNsaXBQYXRoIGlkPSJjbGlwLXBhdGgiPgogICAgICA8cGF0aCBpZD0iUGF0aF8zNDUzNyIgZGF0YS1uYW1lPSJQYXRoIDM0NTM3IiBkPSJNMCwwSDEzLjRWMTMuNEgwWiIgZmlsbD0iI2ZmZiIvPgogICAgPC9jbGlwUGF0aD4KICA8L2RlZnM+CiAgPGcgaWQ9Im1hc3Rlci1leHBlcmllbmNlXzUiIGNsaXAtcGF0aD0idXJsKCNjbGlwLXBhdGgpIj4KICAgIDxwYXRoIGlkPSJQYXRoXzM0NTM2IiBkYXRhLW5hbWU9IlBhdGggMzQ1MzYiIGQ9Ik03LjE1MywzLjEsNy43LDQuODU0YS40OTEuNDkxLDAsMCwwLC40Ni4zNWgxLjc3YS41MS41MSwwLDAsMSwuMjgzLjkxNkw4Ljc4Miw3LjIwNmEuNTI1LjUyNSwwLDAsMC0uMTc5LjU2NmwuNTQzLDEuNzU3YS40ODkuNDg5LDAsMCwxLS43NDQuNTY2TDYuOTc1LDkuMDA4YS40NzkuNDc5LDAsMCwwLS41NzMsMGwtMS40MiwxLjA4N2EuNDg4LjQ4OCwwLDAsMS0uNzQ0LS41NjZsLjU0My0xLjc1N0EuNTE0LjUxNCwwLDAsMCw0LjYsNy4yMDZMMy4xNzUsNi4xMTlBLjUxLjUxLDAsMCwxLDMuNDU4LDUuMmgxLjc3YS40OTIuNDkyLDAsMCwwLC40NjItLjM1TDYuMjMxLDMuMWEuNDc4LjQ3OCwwLDAsMSwuOTIyLDBaTTIuOTc0LDkuODI1QTUuOTQzLDUuOTQzLDAsMCwxLDIuMjgyLDguNDEsMS41NDIsMS41NDIsMCwwLDAsLjgxOCw3LjM1M0gwQTguMjUsOC4yNSwwLDAsMCwuNDMxLDkuMjgxYTEuNSwxLjUsMCwwLDAsMi41NDMuNTQzWk0xMS4xLDguNDFhNS45NjksNS45NjksMCwwLDEtLjY5MiwxLjQxNSwxLjUsMS41LDAsMCwwLDIuNTQ0LS41NDMsOC4yNDksOC4yNDksMCwwLDAsLjQzMS0xLjkyOGgtLjgxOUExLjU0OSwxLjU0OSwwLDAsMCwxMS4xLDguNDFaTTUuOTQ5LDExLjY2M2E1LjE5Myw1LjE5MywwLDAsMS0xLjQyLS40NTQsMS40NjYsMS40NjYsMCwwLDAtMS43LjM1bC0uNTk1LjYxOGE3LjIxLDcuMjEsMCwwLDAsMS41NDcuOTksMS41NjgsMS41NjgsMCwwLDAsMi4xNzItMS41Wm0yLjkwNy0uNDU0YTUuMiw1LjIsMCwwLDEtMS40Mi40NTQsMS41NjQsMS41NjQsMCwwLDAsMi4xNjQsMS41LDcuMDE0LDcuMDE0LDAsMCwwLDEuNTQ3LS45OWwtLjYtLjYxOEExLjQ1MSwxLjQ1MSwwLDAsMCw4Ljg1NywxMS4yMDlabTIuNDYyLTYuODQyYTUuNzY5LDUuNzY5LDAsMCwxLC41MDYsMS40ODksMS40OTQsMS40OTQsMCwwLDAsMS40MTMtMi4xODEsOC42NDUsOC42NDUsMCwwLDAtMS4wNTYtMS42NjhsLS41OC41NzNhMS41NjUsMS41NjUsMCwwLDAtLjI4MywxLjc4N1ptLTkuMjI5LDBhNS42NjgsNS42NjgsMCwwLDAtLjUxMywxLjQ4OUExLjQ5NCwxLjQ5NCwwLDAsMSwuMTYzLDMuNjc1LDguNjY1LDguNjY1LDAsMCwxLDEuMjIsMmwuNTguNTgxYTEuNTU1LDEuNTU1LDAsMCwxLC4yOSwxLjc4N1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAxIC0wLjUxMSkiIGZpbGw9IiNmZmYiLz4KICA8L2c+Cjwvc3ZnPgo="
                                  class="mr-2"
                                />
                                <span>Chuyên gia</span>
                              </div>
                            </div>
                            <!---->
                          </div>
                        </div>
                      </div>
                      <div class="bodyBox mb-015rem numberContent">
                        <div class="d-flex w-100">
                          <div class="flexBox">
                            <p class="number gain green">46.25%</p>
                            <p class="title">Lợi nhuận (30N)</p>
                          </div>
                          <div class="flexBox">
                            <p class="number">0</p>
                            <p class="title">Người sao chép</p>
                          </div>
                          <div class="flexBox">
                            <p class="number">5%</p>
                            <p class="title">Chia sẻ ln</p>
                          </div>
                        </div>
                      </div>
                      <div class="bodyBox">
                        <button
                          class="btn btn-secondary startCopy w-100 d-flex align-items-center justify-content-center disabled"
                        >
                          <img
                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOS4wNTciIGhlaWdodD0iMTkuMDU3IiB2aWV3Qm94PSIwIDAgMTkuMDU3IDE5LjA1NyI+CiAgPHBhdGggaWQ9IlBhdGhfMzQ1NDkiIGRhdGEtbmFtZT0iUGF0aCAzNDU0OSIgZD0iTTExLjUyOCwyYTkuNTI4LDkuNTI4LDAsMSwwLDkuNTI4LDkuNTI4QTkuNTI4LDkuNTI4LDAsMCwwLDExLjUyOCwyWm00LjkyMyw5LjhMOC44MjksMTYuMjQ5YS4zMTguMzE4LDAsMCwxLS40NzYtLjI3NFY3LjA4MmEuMzE4LjMxOCwwLDAsMSwuNDc2LS4yNzRsNy42MjMsNC40NDdhLjMxOC4zMTgsMCwwLDEsMCwuNTQ5WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIgLTIpIiBmaWxsPSIjZmZmIi8+Cjwvc3ZnPgo="
                          />
                          <span class="ml-2">Bắt đầu sao chép</span>
                        </button>
                      </div>
                      <div class="footerBox">
                        <p class="mb-0">
                          <span class="text mr-1">Đầu tư tối thiểu</span
                          ><span class="number">$25.00</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-lg-6 col-xl-4">
                  <div class="communityItem">
                    <div class="boxProfile">
                      <div class="headerBox d-flex">
                        <img
                          src="https://projgapidiagnostics.blob.core.windows.net/kyc-data/1584378633274/avatar/20f9001e-c798-4db9-be81-ec0ef7ff2657.jpeg?sv=2016-05-31&amp;sig=dXgf18yFQIsYlHKTWr6zGUl1pWHbae9v%2BdZDEVkhgqo%3D&amp;spr=https&amp;se=2020-10-15T10%3A31%3A33Z&amp;srt=o&amp;ss=bf&amp;sp=r"
                          width="84"
                          height="84"
                          class="avatar"
                        />
                        <div class="profile align-self-center w-100">
                          <p class="name mb-2">Eaglewin</p>
                          <div class="d-flex w-100">
                            <div class="label orange mr-2">
                              <div class="d-flex align-items-center">
                                <img
                                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTMuNDAxIiBoZWlnaHQ9IjEzLjQwMSIgdmlld0JveD0iMCAwIDEzLjQwMSAxMy40MDEiPgogIDxkZWZzPgogICAgPGNsaXBQYXRoIGlkPSJjbGlwLXBhdGgiPgogICAgICA8cGF0aCBpZD0iUGF0aF8zNDUzNyIgZGF0YS1uYW1lPSJQYXRoIDM0NTM3IiBkPSJNMCwwSDEzLjRWMTMuNEgwWiIgZmlsbD0iI2ZmZiIvPgogICAgPC9jbGlwUGF0aD4KICA8L2RlZnM+CiAgPGcgaWQ9Im1hc3Rlci1leHBlcmllbmNlXzUiIGNsaXAtcGF0aD0idXJsKCNjbGlwLXBhdGgpIj4KICAgIDxwYXRoIGlkPSJQYXRoXzM0NTM2IiBkYXRhLW5hbWU9IlBhdGggMzQ1MzYiIGQ9Ik03LjE1MywzLjEsNy43LDQuODU0YS40OTEuNDkxLDAsMCwwLC40Ni4zNWgxLjc3YS41MS41MSwwLDAsMSwuMjgzLjkxNkw4Ljc4Miw3LjIwNmEuNTI1LjUyNSwwLDAsMC0uMTc5LjU2NmwuNTQzLDEuNzU3YS40ODkuNDg5LDAsMCwxLS43NDQuNTY2TDYuOTc1LDkuMDA4YS40NzkuNDc5LDAsMCwwLS41NzMsMGwtMS40MiwxLjA4N2EuNDg4LjQ4OCwwLDAsMS0uNzQ0LS41NjZsLjU0My0xLjc1N0EuNTE0LjUxNCwwLDAsMCw0LjYsNy4yMDZMMy4xNzUsNi4xMTlBLjUxLjUxLDAsMCwxLDMuNDU4LDUuMmgxLjc3YS40OTIuNDkyLDAsMCwwLC40NjItLjM1TDYuMjMxLDMuMWEuNDc4LjQ3OCwwLDAsMSwuOTIyLDBaTTIuOTc0LDkuODI1QTUuOTQzLDUuOTQzLDAsMCwxLDIuMjgyLDguNDEsMS41NDIsMS41NDIsMCwwLDAsLjgxOCw3LjM1M0gwQTguMjUsOC4yNSwwLDAsMCwuNDMxLDkuMjgxYTEuNSwxLjUsMCwwLDAsMi41NDMuNTQzWk0xMS4xLDguNDFhNS45NjksNS45NjksMCwwLDEtLjY5MiwxLjQxNSwxLjUsMS41LDAsMCwwLDIuNTQ0LS41NDMsOC4yNDksOC4yNDksMCwwLDAsLjQzMS0xLjkyOGgtLjgxOUExLjU0OSwxLjU0OSwwLDAsMCwxMS4xLDguNDFaTTUuOTQ5LDExLjY2M2E1LjE5Myw1LjE5MywwLDAsMS0xLjQyLS40NTQsMS40NjYsMS40NjYsMCwwLDAtMS43LjM1bC0uNTk1LjYxOGE3LjIxLDcuMjEsMCwwLDAsMS41NDcuOTksMS41NjgsMS41NjgsMCwwLDAsMi4xNzItMS41Wm0yLjkwNy0uNDU0YTUuMiw1LjIsMCwwLDEtMS40Mi40NTQsMS41NjQsMS41NjQsMCwwLDAsMi4xNjQsMS41LDcuMDE0LDcuMDE0LDAsMCwwLDEuNTQ3LS45OWwtLjYtLjYxOEExLjQ1MSwxLjQ1MSwwLDAsMCw4Ljg1NywxMS4yMDlabTIuNDYyLTYuODQyYTUuNzY5LDUuNzY5LDAsMCwxLC41MDYsMS40ODksMS40OTQsMS40OTQsMCwwLDAsMS40MTMtMi4xODEsOC42NDUsOC42NDUsMCwwLDAtMS4wNTYtMS42NjhsLS41OC41NzNhMS41NjUsMS41NjUsMCwwLDAtLjI4MywxLjc4N1ptLTkuMjI5LDBhNS42NjgsNS42NjgsMCwwLDAtLjUxMywxLjQ4OUExLjQ5NCwxLjQ5NCwwLDAsMSwuMTYzLDMuNjc1LDguNjY1LDguNjY1LDAsMCwxLDEuMjIsMmwuNTguNTgxYTEuNTU1LDEuNTU1LDAsMCwxLC4yOSwxLjc4N1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAxIC0wLjUxMSkiIGZpbGw9IiNmZmYiLz4KICA8L2c+Cjwvc3ZnPgo="
                                  class="mr-2"
                                />
                                <span>Chuyên gia</span>
                              </div>
                            </div>
                            <!---->
                          </div>
                        </div>
                      </div>
                      <div class="bodyBox mb-015rem numberContent">
                        <div class="d-flex w-100">
                          <div class="flexBox">
                            <p class="number gain green">45.33%</p>
                            <p class="title">Lợi nhuận (30N)</p>
                          </div>
                          <div class="flexBox">
                            <p class="number">0</p>
                            <p class="title">Người sao chép</p>
                          </div>
                          <div class="flexBox">
                            <p class="number">5%</p>
                            <p class="title">Chia sẻ ln</p>
                          </div>
                        </div>
                      </div>
                      <div class="bodyBox">
                        <button
                          class="btn btn-secondary startCopy w-100 d-flex align-items-center justify-content-center disabled"
                        >
                          <img
                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOS4wNTciIGhlaWdodD0iMTkuMDU3IiB2aWV3Qm94PSIwIDAgMTkuMDU3IDE5LjA1NyI+CiAgPHBhdGggaWQ9IlBhdGhfMzQ1NDkiIGRhdGEtbmFtZT0iUGF0aCAzNDU0OSIgZD0iTTExLjUyOCwyYTkuNTI4LDkuNTI4LDAsMSwwLDkuNTI4LDkuNTI4QTkuNTI4LDkuNTI4LDAsMCwwLDExLjUyOCwyWm00LjkyMyw5LjhMOC44MjksMTYuMjQ5YS4zMTguMzE4LDAsMCwxLS40NzYtLjI3NFY3LjA4MmEuMzE4LjMxOCwwLDAsMSwuNDc2LS4yNzRsNy42MjMsNC40NDdhLjMxOC4zMTgsMCwwLDEsMCwuNTQ5WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIgLTIpIiBmaWxsPSIjZmZmIi8+Cjwvc3ZnPgo="
                          />
                          <span class="ml-2">Bắt đầu sao chép</span>
                        </button>
                      </div>
                      <div class="footerBox">
                        <p class="mb-0">
                          <span class="text mr-1">Đầu tư tối thiểu</span
                          ><span class="number">$10.00</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-lg-6 col-xl-4">
                  <div class="communityItem">
                    <div class="boxProfile">
                      <div class="headerBox d-flex">
                        <img
                          src="https://projgapidiagnostics.blob.core.windows.net/kyc-data/1583827924009/avatar/4f90d992-f224-445a-ab15-3f3682284344.jpeg?sv=2016-05-31&amp;sig=dXgf18yFQIsYlHKTWr6zGUl1pWHbae9v%2BdZDEVkhgqo%3D&amp;spr=https&amp;se=2020-10-15T10%3A31%3A33Z&amp;srt=o&amp;ss=bf&amp;sp=r"
                          width="84"
                          height="84"
                          class="avatar"
                        />
                        <div class="profile align-self-center w-100">
                          <p class="name mb-2">Bimmer6666</p>
                          <div class="d-flex w-100">
                            <div class="label orange mr-2">
                              <div class="d-flex align-items-center">
                                <img
                                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTMuNDAxIiBoZWlnaHQ9IjEzLjQwMSIgdmlld0JveD0iMCAwIDEzLjQwMSAxMy40MDEiPgogIDxkZWZzPgogICAgPGNsaXBQYXRoIGlkPSJjbGlwLXBhdGgiPgogICAgICA8cGF0aCBpZD0iUGF0aF8zNDUzNyIgZGF0YS1uYW1lPSJQYXRoIDM0NTM3IiBkPSJNMCwwSDEzLjRWMTMuNEgwWiIgZmlsbD0iI2ZmZiIvPgogICAgPC9jbGlwUGF0aD4KICA8L2RlZnM+CiAgPGcgaWQ9Im1hc3Rlci1leHBlcmllbmNlXzUiIGNsaXAtcGF0aD0idXJsKCNjbGlwLXBhdGgpIj4KICAgIDxwYXRoIGlkPSJQYXRoXzM0NTM2IiBkYXRhLW5hbWU9IlBhdGggMzQ1MzYiIGQ9Ik03LjE1MywzLjEsNy43LDQuODU0YS40OTEuNDkxLDAsMCwwLC40Ni4zNWgxLjc3YS41MS41MSwwLDAsMSwuMjgzLjkxNkw4Ljc4Miw3LjIwNmEuNTI1LjUyNSwwLDAsMC0uMTc5LjU2NmwuNTQzLDEuNzU3YS40ODkuNDg5LDAsMCwxLS43NDQuNTY2TDYuOTc1LDkuMDA4YS40NzkuNDc5LDAsMCwwLS41NzMsMGwtMS40MiwxLjA4N2EuNDg4LjQ4OCwwLDAsMS0uNzQ0LS41NjZsLjU0My0xLjc1N0EuNTE0LjUxNCwwLDAsMCw0LjYsNy4yMDZMMy4xNzUsNi4xMTlBLjUxLjUxLDAsMCwxLDMuNDU4LDUuMmgxLjc3YS40OTIuNDkyLDAsMCwwLC40NjItLjM1TDYuMjMxLDMuMWEuNDc4LjQ3OCwwLDAsMSwuOTIyLDBaTTIuOTc0LDkuODI1QTUuOTQzLDUuOTQzLDAsMCwxLDIuMjgyLDguNDEsMS41NDIsMS41NDIsMCwwLDAsLjgxOCw3LjM1M0gwQTguMjUsOC4yNSwwLDAsMCwuNDMxLDkuMjgxYTEuNSwxLjUsMCwwLDAsMi41NDMuNTQzWk0xMS4xLDguNDFhNS45NjksNS45NjksMCwwLDEtLjY5MiwxLjQxNSwxLjUsMS41LDAsMCwwLDIuNTQ0LS41NDMsOC4yNDksOC4yNDksMCwwLDAsLjQzMS0xLjkyOGgtLjgxOUExLjU0OSwxLjU0OSwwLDAsMCwxMS4xLDguNDFaTTUuOTQ5LDExLjY2M2E1LjE5Myw1LjE5MywwLDAsMS0xLjQyLS40NTQsMS40NjYsMS40NjYsMCwwLDAtMS43LjM1bC0uNTk1LjYxOGE3LjIxLDcuMjEsMCwwLDAsMS41NDcuOTksMS41NjgsMS41NjgsMCwwLDAsMi4xNzItMS41Wm0yLjkwNy0uNDU0YTUuMiw1LjIsMCwwLDEtMS40Mi40NTQsMS41NjQsMS41NjQsMCwwLDAsMi4xNjQsMS41LDcuMDE0LDcuMDE0LDAsMCwwLDEuNTQ3LS45OWwtLjYtLjYxOEExLjQ1MSwxLjQ1MSwwLDAsMCw4Ljg1NywxMS4yMDlabTIuNDYyLTYuODQyYTUuNzY5LDUuNzY5LDAsMCwxLC41MDYsMS40ODksMS40OTQsMS40OTQsMCwwLDAsMS40MTMtMi4xODEsOC42NDUsOC42NDUsMCwwLDAtMS4wNTYtMS42NjhsLS41OC41NzNhMS41NjUsMS41NjUsMCwwLDAtLjI4MywxLjc4N1ptLTkuMjI5LDBhNS42NjgsNS42NjgsMCwwLDAtLjUxMywxLjQ4OUExLjQ5NCwxLjQ5NCwwLDAsMSwuMTYzLDMuNjc1LDguNjY1LDguNjY1LDAsMCwxLDEuMjIsMmwuNTguNTgxYTEuNTU1LDEuNTU1LDAsMCwxLC4yOSwxLjc4N1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAxIC0wLjUxMSkiIGZpbGw9IiNmZmYiLz4KICA8L2c+Cjwvc3ZnPgo="
                                  class="mr-2"
                                />
                                <span>Chuyên gia</span>
                              </div>
                            </div>
                            <!---->
                          </div>
                        </div>
                      </div>
                      <div class="bodyBox mb-015rem numberContent">
                        <div class="d-flex w-100">
                          <div class="flexBox">
                            <p class="number gain green">45.31%</p>
                            <p class="title">Lợi nhuận (30N)</p>
                          </div>
                          <div class="flexBox">
                            <p class="number">0</p>
                            <p class="title">Người sao chép</p>
                          </div>
                          <div class="flexBox">
                            <p class="number">5%</p>
                            <p class="title">Chia sẻ ln</p>
                          </div>
                        </div>
                      </div>
                      <div class="bodyBox">
                        <button
                          class="btn btn-secondary startCopy w-100 d-flex align-items-center justify-content-center disabled"
                        >
                          <img
                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOS4wNTciIGhlaWdodD0iMTkuMDU3IiB2aWV3Qm94PSIwIDAgMTkuMDU3IDE5LjA1NyI+CiAgPHBhdGggaWQ9IlBhdGhfMzQ1NDkiIGRhdGEtbmFtZT0iUGF0aCAzNDU0OSIgZD0iTTExLjUyOCwyYTkuNTI4LDkuNTI4LDAsMSwwLDkuNTI4LDkuNTI4QTkuNTI4LDkuNTI4LDAsMCwwLDExLjUyOCwyWm00LjkyMyw5LjhMOC44MjksMTYuMjQ5YS4zMTguMzE4LDAsMCwxLS40NzYtLjI3NFY3LjA4MmEuMzE4LjMxOCwwLDAsMSwuNDc2LS4yNzRsNy42MjMsNC40NDdhLjMxOC4zMTgsMCwwLDEsMCwuNTQ5WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIgLTIpIiBmaWxsPSIjZmZmIi8+Cjwvc3ZnPgo="
                          />
                          <span class="ml-2">Bắt đầu sao chép</span>
                        </button>
                      </div>
                      <div class="footerBox">
                        <p class="mb-0">
                          <span class="text mr-1">Đầu tư tối thiểu</span
                          ><span class="number">$10.00</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-lg-6 col-xl-4">
                  <div class="communityItem">
                    <div class="boxProfile">
                      <div class="headerBox d-flex">
                        <img
                          src="https://projgapidiagnostics.blob.core.windows.net/kyc-data/1592410365828/avatar/957de668-3ac0-4d3d-8297-2a6f520f4658_thumbnail.jpg?sv=2016-05-31&amp;sig=dXgf18yFQIsYlHKTWr6zGUl1pWHbae9v%2BdZDEVkhgqo%3D&amp;spr=https&amp;se=2020-10-15T10%3A31%3A33Z&amp;srt=o&amp;ss=bf&amp;sp=r"
                          width="84"
                          height="84"
                          class="avatar"
                        />
                        <div class="profile align-self-center w-100">
                          <p class="name mb-2">andynguyen89</p>
                          <div class="d-flex w-100">
                            <div class="label orange mr-2">
                              <div class="d-flex align-items-center">
                                <img
                                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTMuNDAxIiBoZWlnaHQ9IjEzLjQwMSIgdmlld0JveD0iMCAwIDEzLjQwMSAxMy40MDEiPgogIDxkZWZzPgogICAgPGNsaXBQYXRoIGlkPSJjbGlwLXBhdGgiPgogICAgICA8cGF0aCBpZD0iUGF0aF8zNDUzNyIgZGF0YS1uYW1lPSJQYXRoIDM0NTM3IiBkPSJNMCwwSDEzLjRWMTMuNEgwWiIgZmlsbD0iI2ZmZiIvPgogICAgPC9jbGlwUGF0aD4KICA8L2RlZnM+CiAgPGcgaWQ9Im1hc3Rlci1leHBlcmllbmNlXzUiIGNsaXAtcGF0aD0idXJsKCNjbGlwLXBhdGgpIj4KICAgIDxwYXRoIGlkPSJQYXRoXzM0NTM2IiBkYXRhLW5hbWU9IlBhdGggMzQ1MzYiIGQ9Ik03LjE1MywzLjEsNy43LDQuODU0YS40OTEuNDkxLDAsMCwwLC40Ni4zNWgxLjc3YS41MS41MSwwLDAsMSwuMjgzLjkxNkw4Ljc4Miw3LjIwNmEuNTI1LjUyNSwwLDAsMC0uMTc5LjU2NmwuNTQzLDEuNzU3YS40ODkuNDg5LDAsMCwxLS43NDQuNTY2TDYuOTc1LDkuMDA4YS40NzkuNDc5LDAsMCwwLS41NzMsMGwtMS40MiwxLjA4N2EuNDg4LjQ4OCwwLDAsMS0uNzQ0LS41NjZsLjU0My0xLjc1N0EuNTE0LjUxNCwwLDAsMCw0LjYsNy4yMDZMMy4xNzUsNi4xMTlBLjUxLjUxLDAsMCwxLDMuNDU4LDUuMmgxLjc3YS40OTIuNDkyLDAsMCwwLC40NjItLjM1TDYuMjMxLDMuMWEuNDc4LjQ3OCwwLDAsMSwuOTIyLDBaTTIuOTc0LDkuODI1QTUuOTQzLDUuOTQzLDAsMCwxLDIuMjgyLDguNDEsMS41NDIsMS41NDIsMCwwLDAsLjgxOCw3LjM1M0gwQTguMjUsOC4yNSwwLDAsMCwuNDMxLDkuMjgxYTEuNSwxLjUsMCwwLDAsMi41NDMuNTQzWk0xMS4xLDguNDFhNS45NjksNS45NjksMCwwLDEtLjY5MiwxLjQxNSwxLjUsMS41LDAsMCwwLDIuNTQ0LS41NDMsOC4yNDksOC4yNDksMCwwLDAsLjQzMS0xLjkyOGgtLjgxOUExLjU0OSwxLjU0OSwwLDAsMCwxMS4xLDguNDFaTTUuOTQ5LDExLjY2M2E1LjE5Myw1LjE5MywwLDAsMS0xLjQyLS40NTQsMS40NjYsMS40NjYsMCwwLDAtMS43LjM1bC0uNTk1LjYxOGE3LjIxLDcuMjEsMCwwLDAsMS41NDcuOTksMS41NjgsMS41NjgsMCwwLDAsMi4xNzItMS41Wm0yLjkwNy0uNDU0YTUuMiw1LjIsMCwwLDEtMS40Mi40NTQsMS41NjQsMS41NjQsMCwwLDAsMi4xNjQsMS41LDcuMDE0LDcuMDE0LDAsMCwwLDEuNTQ3LS45OWwtLjYtLjYxOEExLjQ1MSwxLjQ1MSwwLDAsMCw4Ljg1NywxMS4yMDlabTIuNDYyLTYuODQyYTUuNzY5LDUuNzY5LDAsMCwxLC41MDYsMS40ODksMS40OTQsMS40OTQsMCwwLDAsMS40MTMtMi4xODEsOC42NDUsOC42NDUsMCwwLDAtMS4wNTYtMS42NjhsLS41OC41NzNhMS41NjUsMS41NjUsMCwwLDAtLjI4MywxLjc4N1ptLTkuMjI5LDBhNS42NjgsNS42NjgsMCwwLDAtLjUxMywxLjQ4OUExLjQ5NCwxLjQ5NCwwLDAsMSwuMTYzLDMuNjc1LDguNjY1LDguNjY1LDAsMCwxLDEuMjIsMmwuNTguNTgxYTEuNTU1LDEuNTU1LDAsMCwxLC4yOSwxLjc4N1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAxIC0wLjUxMSkiIGZpbGw9IiNmZmYiLz4KICA8L2c+Cjwvc3ZnPgo="
                                  class="mr-2"
                                />
                                <span>Chuyên gia</span>
                              </div>
                            </div>
                            <!---->
                          </div>
                        </div>
                      </div>
                      <div class="bodyBox mb-015rem numberContent">
                        <div class="d-flex w-100">
                          <div class="flexBox">
                            <p class="number gain green">44.85%</p>
                            <p class="title">Lợi nhuận (30N)</p>
                          </div>
                          <div class="flexBox">
                            <p class="number">0</p>
                            <p class="title">Người sao chép</p>
                          </div>
                          <div class="flexBox">
                            <p class="number">10%</p>
                            <p class="title">Chia sẻ ln</p>
                          </div>
                        </div>
                      </div>
                      <div class="bodyBox">
                        <button
                          class="btn btn-secondary startCopy w-100 d-flex align-items-center justify-content-center disabled"
                        >
                          <img
                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOS4wNTciIGhlaWdodD0iMTkuMDU3IiB2aWV3Qm94PSIwIDAgMTkuMDU3IDE5LjA1NyI+CiAgPHBhdGggaWQ9IlBhdGhfMzQ1NDkiIGRhdGEtbmFtZT0iUGF0aCAzNDU0OSIgZD0iTTExLjUyOCwyYTkuNTI4LDkuNTI4LDAsMSwwLDkuNTI4LDkuNTI4QTkuNTI4LDkuNTI4LDAsMCwwLDExLjUyOCwyWm00LjkyMyw5LjhMOC44MjksMTYuMjQ5YS4zMTguMzE4LDAsMCwxLS40NzYtLjI3NFY3LjA4MmEuMzE4LjMxOCwwLDAsMSwuNDc2LS4yNzRsNy42MjMsNC40NDdhLjMxOC4zMTgsMCwwLDEsMCwuNTQ5WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIgLTIpIiBmaWxsPSIjZmZmIi8+Cjwvc3ZnPgo="
                          />
                          <span class="ml-2">Bắt đầu sao chép</span>
                        </button>
                      </div>
                      <div class="footerBox">
                        <p class="mb-0">
                          <span class="text mr-1">Đầu tư tối thiểu</span
                          ><span class="number">$25.00</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-lg-6 col-xl-4">
                  <div class="communityItem">
                    <div class="boxProfile">
                      <div class="headerBox d-flex">
                        <img
                          src="https://projgapidiagnostics.blob.core.windows.net/kyc-data/1584111678644/avatar/7d6922ca-214d-4709-88ed-7939a382b969.jpeg?sv=2016-05-31&amp;sig=dXgf18yFQIsYlHKTWr6zGUl1pWHbae9v%2BdZDEVkhgqo%3D&amp;spr=https&amp;se=2020-10-15T10%3A31%3A33Z&amp;srt=o&amp;ss=bf&amp;sp=r"
                          width="84"
                          height="84"
                          class="avatar"
                        />
                        <div class="profile align-self-center w-100">
                          <p class="name mb-2">f.marvel</p>
                          <div class="d-flex w-100">
                            <div class="label orange mr-2">
                              <div class="d-flex align-items-center">
                                <img
                                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTMuNDAxIiBoZWlnaHQ9IjEzLjQwMSIgdmlld0JveD0iMCAwIDEzLjQwMSAxMy40MDEiPgogIDxkZWZzPgogICAgPGNsaXBQYXRoIGlkPSJjbGlwLXBhdGgiPgogICAgICA8cGF0aCBpZD0iUGF0aF8zNDUzNyIgZGF0YS1uYW1lPSJQYXRoIDM0NTM3IiBkPSJNMCwwSDEzLjRWMTMuNEgwWiIgZmlsbD0iI2ZmZiIvPgogICAgPC9jbGlwUGF0aD4KICA8L2RlZnM+CiAgPGcgaWQ9Im1hc3Rlci1leHBlcmllbmNlXzUiIGNsaXAtcGF0aD0idXJsKCNjbGlwLXBhdGgpIj4KICAgIDxwYXRoIGlkPSJQYXRoXzM0NTM2IiBkYXRhLW5hbWU9IlBhdGggMzQ1MzYiIGQ9Ik03LjE1MywzLjEsNy43LDQuODU0YS40OTEuNDkxLDAsMCwwLC40Ni4zNWgxLjc3YS41MS41MSwwLDAsMSwuMjgzLjkxNkw4Ljc4Miw3LjIwNmEuNTI1LjUyNSwwLDAsMC0uMTc5LjU2NmwuNTQzLDEuNzU3YS40ODkuNDg5LDAsMCwxLS43NDQuNTY2TDYuOTc1LDkuMDA4YS40NzkuNDc5LDAsMCwwLS41NzMsMGwtMS40MiwxLjA4N2EuNDg4LjQ4OCwwLDAsMS0uNzQ0LS41NjZsLjU0My0xLjc1N0EuNTE0LjUxNCwwLDAsMCw0LjYsNy4yMDZMMy4xNzUsNi4xMTlBLjUxLjUxLDAsMCwxLDMuNDU4LDUuMmgxLjc3YS40OTIuNDkyLDAsMCwwLC40NjItLjM1TDYuMjMxLDMuMWEuNDc4LjQ3OCwwLDAsMSwuOTIyLDBaTTIuOTc0LDkuODI1QTUuOTQzLDUuOTQzLDAsMCwxLDIuMjgyLDguNDEsMS41NDIsMS41NDIsMCwwLDAsLjgxOCw3LjM1M0gwQTguMjUsOC4yNSwwLDAsMCwuNDMxLDkuMjgxYTEuNSwxLjUsMCwwLDAsMi41NDMuNTQzWk0xMS4xLDguNDFhNS45NjksNS45NjksMCwwLDEtLjY5MiwxLjQxNSwxLjUsMS41LDAsMCwwLDIuNTQ0LS41NDMsOC4yNDksOC4yNDksMCwwLDAsLjQzMS0xLjkyOGgtLjgxOUExLjU0OSwxLjU0OSwwLDAsMCwxMS4xLDguNDFaTTUuOTQ5LDExLjY2M2E1LjE5Myw1LjE5MywwLDAsMS0xLjQyLS40NTQsMS40NjYsMS40NjYsMCwwLDAtMS43LjM1bC0uNTk1LjYxOGE3LjIxLDcuMjEsMCwwLDAsMS41NDcuOTksMS41NjgsMS41NjgsMCwwLDAsMi4xNzItMS41Wm0yLjkwNy0uNDU0YTUuMiw1LjIsMCwwLDEtMS40Mi40NTQsMS41NjQsMS41NjQsMCwwLDAsMi4xNjQsMS41LDcuMDE0LDcuMDE0LDAsMCwwLDEuNTQ3LS45OWwtLjYtLjYxOEExLjQ1MSwxLjQ1MSwwLDAsMCw4Ljg1NywxMS4yMDlabTIuNDYyLTYuODQyYTUuNzY5LDUuNzY5LDAsMCwxLC41MDYsMS40ODksMS40OTQsMS40OTQsMCwwLDAsMS40MTMtMi4xODEsOC42NDUsOC42NDUsMCwwLDAtMS4wNTYtMS42NjhsLS41OC41NzNhMS41NjUsMS41NjUsMCwwLDAtLjI4MywxLjc4N1ptLTkuMjI5LDBhNS42NjgsNS42NjgsMCwwLDAtLjUxMywxLjQ4OUExLjQ5NCwxLjQ5NCwwLDAsMSwuMTYzLDMuNjc1LDguNjY1LDguNjY1LDAsMCwxLDEuMjIsMmwuNTguNTgxYTEuNTU1LDEuNTU1LDAsMCwxLC4yOSwxLjc4N1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAxIC0wLjUxMSkiIGZpbGw9IiNmZmYiLz4KICA8L2c+Cjwvc3ZnPgo="
                                  class="mr-2"
                                />
                                <span>Chuyên gia</span>
                              </div>
                            </div>
                            <!---->
                          </div>
                        </div>
                      </div>
                      <div class="bodyBox mb-015rem numberContent">
                        <div class="d-flex w-100">
                          <div class="flexBox">
                            <p class="number gain green">44.02%</p>
                            <p class="title">Lợi nhuận (30N)</p>
                          </div>
                          <div class="flexBox">
                            <p class="number">0</p>
                            <p class="title">Người sao chép</p>
                          </div>
                          <div class="flexBox">
                            <p class="number">10%</p>
                            <p class="title">Chia sẻ ln</p>
                          </div>
                        </div>
                      </div>
                      <div class="bodyBox">
                        <button
                          class="btn btn-secondary startCopy w-100 d-flex align-items-center justify-content-center disabled"
                        >
                          <img
                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOS4wNTciIGhlaWdodD0iMTkuMDU3IiB2aWV3Qm94PSIwIDAgMTkuMDU3IDE5LjA1NyI+CiAgPHBhdGggaWQ9IlBhdGhfMzQ1NDkiIGRhdGEtbmFtZT0iUGF0aCAzNDU0OSIgZD0iTTExLjUyOCwyYTkuNTI4LDkuNTI4LDAsMSwwLDkuNTI4LDkuNTI4QTkuNTI4LDkuNTI4LDAsMCwwLDExLjUyOCwyWm00LjkyMyw5LjhMOC44MjksMTYuMjQ5YS4zMTguMzE4LDAsMCwxLS40NzYtLjI3NFY3LjA4MmEuMzE4LjMxOCwwLDAsMSwuNDc2LS4yNzRsNy42MjMsNC40NDdhLjMxOC4zMTgsMCwwLDEsMCwuNTQ5WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIgLTIpIiBmaWxsPSIjZmZmIi8+Cjwvc3ZnPgo="
                          />
                          <span class="ml-2">Bắt đầu sao chép</span>
                        </button>
                      </div>
                      <div class="footerBox">
                        <p class="mb-0">
                          <span class="text mr-1">Đầu tư tối thiểu</span
                          ><span class="number">$100.00</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-lg-6 col-xl-4">
                  <div class="communityItem">
                    <div class="boxProfile">
                      <div class="headerBox d-flex">
                        <img
                          src="https://projgapidiagnostics.blob.core.windows.net/kyc-data/1578103125545/avatar/d8878897-516d-41a9-8fea-b898ab25e5fb_thumbnail.jpg?sv=2016-05-31&amp;sig=dXgf18yFQIsYlHKTWr6zGUl1pWHbae9v%2BdZDEVkhgqo%3D&amp;spr=https&amp;se=2020-10-15T10%3A31%3A33Z&amp;srt=o&amp;ss=bf&amp;sp=r"
                          width="84"
                          height="84"
                          class="avatar"
                        />
                        <div class="profile align-self-center w-100">
                          <p class="name mb-2">doanminhvuong</p>
                          <div class="d-flex w-100">
                            <div class="label orange mr-2">
                              <div class="d-flex align-items-center">
                                <img
                                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTMuNDAxIiBoZWlnaHQ9IjEzLjQwMSIgdmlld0JveD0iMCAwIDEzLjQwMSAxMy40MDEiPgogIDxkZWZzPgogICAgPGNsaXBQYXRoIGlkPSJjbGlwLXBhdGgiPgogICAgICA8cGF0aCBpZD0iUGF0aF8zNDUzNyIgZGF0YS1uYW1lPSJQYXRoIDM0NTM3IiBkPSJNMCwwSDEzLjRWMTMuNEgwWiIgZmlsbD0iI2ZmZiIvPgogICAgPC9jbGlwUGF0aD4KICA8L2RlZnM+CiAgPGcgaWQ9Im1hc3Rlci1leHBlcmllbmNlXzUiIGNsaXAtcGF0aD0idXJsKCNjbGlwLXBhdGgpIj4KICAgIDxwYXRoIGlkPSJQYXRoXzM0NTM2IiBkYXRhLW5hbWU9IlBhdGggMzQ1MzYiIGQ9Ik03LjE1MywzLjEsNy43LDQuODU0YS40OTEuNDkxLDAsMCwwLC40Ni4zNWgxLjc3YS41MS41MSwwLDAsMSwuMjgzLjkxNkw4Ljc4Miw3LjIwNmEuNTI1LjUyNSwwLDAsMC0uMTc5LjU2NmwuNTQzLDEuNzU3YS40ODkuNDg5LDAsMCwxLS43NDQuNTY2TDYuOTc1LDkuMDA4YS40NzkuNDc5LDAsMCwwLS41NzMsMGwtMS40MiwxLjA4N2EuNDg4LjQ4OCwwLDAsMS0uNzQ0LS41NjZsLjU0My0xLjc1N0EuNTE0LjUxNCwwLDAsMCw0LjYsNy4yMDZMMy4xNzUsNi4xMTlBLjUxLjUxLDAsMCwxLDMuNDU4LDUuMmgxLjc3YS40OTIuNDkyLDAsMCwwLC40NjItLjM1TDYuMjMxLDMuMWEuNDc4LjQ3OCwwLDAsMSwuOTIyLDBaTTIuOTc0LDkuODI1QTUuOTQzLDUuOTQzLDAsMCwxLDIuMjgyLDguNDEsMS41NDIsMS41NDIsMCwwLDAsLjgxOCw3LjM1M0gwQTguMjUsOC4yNSwwLDAsMCwuNDMxLDkuMjgxYTEuNSwxLjUsMCwwLDAsMi41NDMuNTQzWk0xMS4xLDguNDFhNS45NjksNS45NjksMCwwLDEtLjY5MiwxLjQxNSwxLjUsMS41LDAsMCwwLDIuNTQ0LS41NDMsOC4yNDksOC4yNDksMCwwLDAsLjQzMS0xLjkyOGgtLjgxOUExLjU0OSwxLjU0OSwwLDAsMCwxMS4xLDguNDFaTTUuOTQ5LDExLjY2M2E1LjE5Myw1LjE5MywwLDAsMS0xLjQyLS40NTQsMS40NjYsMS40NjYsMCwwLDAtMS43LjM1bC0uNTk1LjYxOGE3LjIxLDcuMjEsMCwwLDAsMS41NDcuOTksMS41NjgsMS41NjgsMCwwLDAsMi4xNzItMS41Wm0yLjkwNy0uNDU0YTUuMiw1LjIsMCwwLDEtMS40Mi40NTQsMS41NjQsMS41NjQsMCwwLDAsMi4xNjQsMS41LDcuMDE0LDcuMDE0LDAsMCwwLDEuNTQ3LS45OWwtLjYtLjYxOEExLjQ1MSwxLjQ1MSwwLDAsMCw4Ljg1NywxMS4yMDlabTIuNDYyLTYuODQyYTUuNzY5LDUuNzY5LDAsMCwxLC41MDYsMS40ODksMS40OTQsMS40OTQsMCwwLDAsMS40MTMtMi4xODEsOC42NDUsOC42NDUsMCwwLDAtMS4wNTYtMS42NjhsLS41OC41NzNhMS41NjUsMS41NjUsMCwwLDAtLjI4MywxLjc4N1ptLTkuMjI5LDBhNS42NjgsNS42NjgsMCwwLDAtLjUxMywxLjQ4OUExLjQ5NCwxLjQ5NCwwLDAsMSwuMTYzLDMuNjc1LDguNjY1LDguNjY1LDAsMCwxLDEuMjIsMmwuNTguNTgxYTEuNTU1LDEuNTU1LDAsMCwxLC4yOSwxLjc4N1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAxIC0wLjUxMSkiIGZpbGw9IiNmZmYiLz4KICA8L2c+Cjwvc3ZnPgo="
                                  class="mr-2"
                                />
                                <span>Chuyên gia</span>
                              </div>
                            </div>
                            <!---->
                          </div>
                        </div>
                      </div>
                      <div class="bodyBox mb-015rem numberContent">
                        <div class="d-flex w-100">
                          <div class="flexBox">
                            <p class="number gain green">35.23%</p>
                            <p class="title">Lợi nhuận (30N)</p>
                          </div>
                          <div class="flexBox">
                            <p class="number">0</p>
                            <p class="title">Người sao chép</p>
                          </div>
                          <div class="flexBox">
                            <p class="number">5%</p>
                            <p class="title">Chia sẻ ln</p>
                          </div>
                        </div>
                      </div>
                      <div class="bodyBox">
                        <button
                          class="btn btn-secondary startCopy w-100 d-flex align-items-center justify-content-center disabled"
                        >
                          <img
                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOS4wNTciIGhlaWdodD0iMTkuMDU3IiB2aWV3Qm94PSIwIDAgMTkuMDU3IDE5LjA1NyI+CiAgPHBhdGggaWQ9IlBhdGhfMzQ1NDkiIGRhdGEtbmFtZT0iUGF0aCAzNDU0OSIgZD0iTTExLjUyOCwyYTkuNTI4LDkuNTI4LDAsMSwwLDkuNTI4LDkuNTI4QTkuNTI4LDkuNTI4LDAsMCwwLDExLjUyOCwyWm00LjkyMyw5LjhMOC44MjksMTYuMjQ5YS4zMTguMzE4LDAsMCwxLS40NzYtLjI3NFY3LjA4MmEuMzE4LjMxOCwwLDAsMSwuNDc2LS4yNzRsNy42MjMsNC40NDdhLjMxOC4zMTgsMCwwLDEsMCwuNTQ5WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIgLTIpIiBmaWxsPSIjZmZmIi8+Cjwvc3ZnPgo="
                          />
                          <span class="ml-2">Bắt đầu sao chép</span>
                        </button>
                      </div>
                      <div class="footerBox">
                        <p class="mb-0">
                          <span class="text mr-1">Đầu tư tối thiểu</span
                          ><span class="number">$10.00</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-lg-6 col-xl-4">
                  <div class="communityItem">
                    <div class="boxProfile">
                      <div class="headerBox d-flex">
                        <img
                          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgdmlld0JveD0iMCAwIDgwIDgwIj4KICA8ZyBpZD0iR3JvdXBfMjA5OTgiIGRhdGEtbmFtZT0iR3JvdXAgMjA5OTgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMzg5IC0wLjQ0MykiPgogICAgPGcgaWQ9Ikdyb3VwXzIwOTg2IiBkYXRhLW5hbWU9Ikdyb3VwIDIwOTg2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC4zODkpIj4KICAgICAgPGcgaWQ9Ikdyb3VwXzIwOTgyIiBkYXRhLW5hbWU9Ikdyb3VwIDIwOTgyIj4KICAgICAgICA8Y2lyY2xlIGlkPSJFbGxpcHNlXzE5MTgiIGRhdGEtbmFtZT0iRWxsaXBzZSAxOTE4IiBjeD0iNDAiIGN5PSI0MCIgcj0iNDAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMC40NDMpIiBmaWxsPSIjZWNmNGZmIi8+CiAgICAgIDwvZz4KICAgICAgPGcgaWQ9Ikdyb3VwXzIwOTgzIiBkYXRhLW5hbWU9Ikdyb3VwIDIwOTgzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4LjM0OCA3Ljg3NCkiPgogICAgICAgIDxwYXRoIGlkPSJQYXRoXzM0ODg1IiBkYXRhLW5hbWU9IlBhdGggMzQ4ODUiIGQ9Ik0xMDYuMzM1LDUwLjc1OWEzOS43MTQsMzkuNzE0LDAsMCwxLTU1LjU3Niw1NS41NzYsMzkuNzEzLDM5LjcxMywwLDEsMCw1NS41NzYtNTUuNTc2WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTUwLjc1OSAtNTAuNzU5KSIgZmlsbD0iI2RkZWFmYiIvPgogICAgICA8L2c+CiAgICAgIDxnIGlkPSJHcm91cF8yMDk4NCIgZGF0YS1uYW1lPSJHcm91cCAyMDk4NCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOS45MDYgNTIuNzI2KSI+CiAgICAgICAgPHBhdGggaWQ9IlBhdGhfMzQ4ODYiIGRhdGEtbmFtZT0iUGF0aCAzNDg4NiIgZD0iTTEyMS4zNjUsMzUyLjU3OUEyMC45NDUsMjAuOTQ1LDAsMCwwLDEwMi4xMTksMzM5LjlIODAuMDU0YTIwLjk0NSwyMC45NDUsMCwwLDAtMTkuMjQ2LDEyLjY3NiwzOS43MDUsMzkuNzA1LDAsMCwwLDYwLjU1NywwWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTYwLjgwOCAtMzM5LjkwMykiIGZpbGw9IiM1MjQ3OTgiLz4KICAgICAgPC9nPgogICAgICA8ZyBpZD0iR3JvdXBfMjA5ODUiIGRhdGEtbmFtZT0iR3JvdXAgMjA5ODUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDkuOTA2IDU2LjQyMSkiPgogICAgICAgIDxwYXRoIGlkPSJQYXRoXzM0ODg3IiBkYXRhLW5hbWU9IlBhdGggMzQ4ODciIGQ9Ik0xMjEuMzY1LDM3Mi43YTIxLjAxOSwyMS4wMTksMCwwLDAtNy4zNy04Ljk4MUEzOS43MTcsMzkuNzE3LDAsMCwxLDYxLjEsMzcyLjA1MmMtLjEuMjE1LS4yLjQzMS0uMjk0LjY1YTM5LjcwNSwzOS43MDUsMCwwLDAsNjAuNTU3LDBaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjAuODA4IC0zNjMuNzIxKSIgZmlsbD0iIzQ1M2Q4MSIvPgogICAgICA8L2c+CiAgICA8L2c+CiAgICA8ZyBpZD0iR3JvdXBfMjA5ODciIGRhdGEtbmFtZT0iR3JvdXAgMjA5ODciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI1LjM5MyA3Ljg2MikiPgogICAgICA8cGF0aCBpZD0iUGF0aF8zNDg4OCIgZGF0YS1uYW1lPSJQYXRoIDM0ODg4IiBkPSJNMTkxLjQsNTUuODE1bC0zLjUwOS0zLjMzNmE2LjUyNCw2LjUyNCwwLDAsMC02LjU5NS0xLjQ0OWwtMTIuNjA2LDQuMjg1YTguMTY1LDguMTY1LDAsMCwwLTUuNTM3LDcuNzMxdjUuODQybC42MjEsMS44MTRoMjguNDU5bC42Mi0xLjgxNFY1OS4yQTQuNjc2LDQuNjc2LDAsMCwwLDE5MS40LDU1LjgxNVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNjMuMTQ5IC01MC42ODIpIiBmaWxsPSIjZmZkMDY0Ii8+CiAgICA8L2c+CiAgICA8ZyBpZD0iR3JvdXBfMjA5ODgiIGRhdGEtbmFtZT0iR3JvdXAgMjA5ODgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM4Ljc0OSA3Ljg2MikiPgogICAgICA8cGF0aCBpZD0iUGF0aF8zNDg4OSIgZGF0YS1uYW1lPSJQYXRoIDM0ODg5IiBkPSJNMjY0LjE0LDU1LjgxNWwtMy41MDktMy4zMzZhNi41MjQsNi41MjQsMCwwLDAtNi41OTUtMS40NDlsLTQuNzg3LDEuNjI3YTYuNTIyLDYuNTIyLDAsMCwxLDMuOTQ4LDEuNzcybDMuNTA5LDMuMzM2YTQuNjc1LDQuNjc1LDAsMCwxLDEuNDU0LDMuMzg4VjcwLjdoNi44MTRsLjYyLTEuODE0VjU5LjJhNC42NzYsNC42NzYsMCwwLDAtMS40NTQtMy4zODhaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjQ5LjI0OSAtNTAuNjgyKSIgZmlsbD0iI2ZmYzI1MCIvPgogICAgPC9nPgogICAgPGcgaWQ9Ikdyb3VwXzIwOTg5IiBkYXRhLW5hbWU9Ikdyb3VwIDIwOTg5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1Mi45ODggMjguMTk1KSI+CiAgICAgIDxwYXRoIGlkPSJQYXRoXzM0ODkwIiBkYXRhLW5hbWU9IlBhdGggMzQ4OTAiIGQ9Ik0zNDIuMiwxODQuOTY1Yy0xLjUyMiwzLjIzMS0xLjY1Myw3LjUyNy4yNTgsOC40MjdzNS4xMzktMS45MzgsNi42NjEtNS4xNjkuNTM4LTUuMTYxLTEuMzcyLTYuMDYxUzM0My43MjEsMTgxLjczNCwzNDIuMiwxODQuOTY1WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTM0MS4wNCAtMTgxLjc2KSIgZmlsbD0iI2ZmY2JiZSIvPgogICAgPC9nPgogICAgPGcgaWQ9Ikdyb3VwXzIwOTkwIiBkYXRhLW5hbWU9Ikdyb3VwIDIwOTkwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyOS44MjUgNDMuNjQ4KSI+CiAgICAgIDxwYXRoIGlkPSJQYXRoXzM0ODkxIiBkYXRhLW5hbWU9IlBhdGggMzQ4OTEiIGQ9Ik0yMDMuOTU0LDI5OS40NTdoLTMuNjMzYTguNiw4LjYsMCwwLDEtOC42LTguNlYyODEuMzhoMjAuODM2djkuNDc2QTguNiw4LjYsMCwwLDEsMjAzLjk1NCwyOTkuNDU3WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE5MS43MTkgLTI4MS4zOCkiIGZpbGw9IiNlYWFjOWQiLz4KICAgIDwvZz4KICAgIDxwYXRoIGlkPSJQYXRoXzM0ODkyIiBkYXRhLW5hbWU9IlBhdGggMzQ4OTIiIGQ9Ik0yNDUuNTgyLDI4MS4zOHY5LjQ3NmE4LjYsOC42LDAsMCwxLTcuMjMzLDguNDkyLDguNjY4LDguNjY4LDAsMCwwLDEuMzY4LjExaDMuNjMzYTguNiw4LjYsMCwwLDAsOC42LTguNlYyODEuMzhaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjAxLjI5MSAtMjM3LjczMikiIGZpbGw9IiNkZjkzODAiLz4KICAgIDxnIGlkPSJHcm91cF8yMDk5MSIgZGF0YS1uYW1lPSJHcm91cCAyMDk5MSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjUuMzkzIDIzLjM2OSkiPgogICAgICA8cGF0aCBpZD0iUGF0aF8zNDg5MyIgZGF0YS1uYW1lPSJQYXRoIDM0ODkzIiBkPSJNMTkwLjE1LDE1MC42NTNIMTY1Ljg0NGEyLjcsMi43LDAsMCwwLTIuNywyLjd2OS42YTE1LjY5MywxNS42OTMsMCwwLDAsNi45MzksMTMuMDI1bDQuMzE2LDIuOWE2LjQ0Niw2LjQ0NiwwLDAsMCwxLjM4Ny43MDYsMjEuMTcyLDIxLjE3MiwwLDAsMCwzLjAyOS0uMDQ5LDE1LjQ4NiwxNS40ODYsMCwwLDAsMy4yMjgtLjk2MmwzLjg2My0yLjZhMTUuNjkzLDE1LjY5MywwLDAsMCw2LjkzOS0xMy4wMjV2LTkuNmEyLjcsMi43LDAsMCwwLTIuNy0yLjdaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTYzLjE0NyAtMTUwLjY1MykiIGZpbGw9IiNmZmNiYmUiLz4KICAgIDwvZz4KICAgIDxnIGlkPSJHcm91cF8yMDk5MiIgZGF0YS1uYW1lPSJHcm91cCAyMDk5MiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzguMDM1IDIzLjM2OSkiPgogICAgICA8cGF0aCBpZD0iUGF0aF8zNDg5NCIgZGF0YS1uYW1lPSJQYXRoIDM0ODk0IiBkPSJNMjU3LjI4OSwxNTAuNjUydjEyLjNhMTUuNjk0LDE1LjY5NCwwLDAsMS02LjkzOSwxMy4wMjVsLTQuMzE2LDIuOWE2LjQ1NSw2LjQ1NSwwLDAsMS0xLjM4OS43MDYsNi40NDcsNi40NDcsMCwwLDAsNS44LS43MDZsNC4zMTYtMi45YTE1LjY5MywxNS42OTMsMCwwLDAsNi45MzktMTMuMDI1di05LjZhMi43LDIuNywwLDAsMC0yLjctMi43aC0xLjcxN1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yNDQuNjQ1IC0xNTAuNjUyKSIgZmlsbD0iI2VhYWM5ZCIvPgogICAgPC9nPgogICAgPGcgaWQ9Ikdyb3VwXzIwOTkzIiBkYXRhLW5hbWU9Ikdyb3VwIDIwOTkzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1Mi45ODggMjguMTk1KSI+CiAgICAgIDxwYXRoIGlkPSJQYXRoXzM0ODk1IiBkYXRhLW5hbWU9IlBhdGggMzQ4OTUiIGQ9Ik0zNDIuMiwxODQuOTY1Yy0xLjUyMiwzLjIzMS0xLjY1Myw3LjUyNy4yNTgsOC40MjdzNS4xMzktMS45MzgsNi42NjEtNS4xNjkuNTM4LTUuMTYxLTEuMzcyLTYuMDYxUzM0My43MjEsMTgxLjczNCwzNDIuMiwxODQuOTY1WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTM0MS4wNCAtMTgxLjc2KSIgZmlsbD0iI2VhYWM5ZCIvPgogICAgPC9nPgogICAgPGcgaWQ9Ikdyb3VwXzIwOTk0IiBkYXRhLW5hbWU9Ikdyb3VwIDIwOTk0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxOC42NzYgMjguMTk1KSI+CiAgICAgIDxwYXRoIGlkPSJQYXRoXzM0ODk2IiBkYXRhLW5hbWU9IlBhdGggMzQ4OTYiIGQ9Ik0xMjcuNTA5LDE4NC45NjVjMS41MjIsMy4yMzEsMS42NTMsNy41MjctLjI1OCw4LjQyN3MtNS4xMzktMS45MzgtNi42NjEtNS4xNjktLjUzOC01LjE2MSwxLjM3Mi02LjA2MVMxMjUuOTg3LDE4MS43MzQsMTI3LjUwOSwxODQuOTY1WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTExOS44NDUgLTE4MS43NikiIGZpbGw9IiNmZmNiYmUiLz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPgo="
                          width="84"
                          height="84"
                          class="avatar"
                        />
                        <div class="profile align-self-center w-100">
                          <p class="name mb-2">Ann310519</p>
                          <div class="d-flex w-100">
                            <div class="label orange mr-2">
                              <div class="d-flex align-items-center">
                                <img
                                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTMuNDAxIiBoZWlnaHQ9IjEzLjQwMSIgdmlld0JveD0iMCAwIDEzLjQwMSAxMy40MDEiPgogIDxkZWZzPgogICAgPGNsaXBQYXRoIGlkPSJjbGlwLXBhdGgiPgogICAgICA8cGF0aCBpZD0iUGF0aF8zNDUzNyIgZGF0YS1uYW1lPSJQYXRoIDM0NTM3IiBkPSJNMCwwSDEzLjRWMTMuNEgwWiIgZmlsbD0iI2ZmZiIvPgogICAgPC9jbGlwUGF0aD4KICA8L2RlZnM+CiAgPGcgaWQ9Im1hc3Rlci1leHBlcmllbmNlXzUiIGNsaXAtcGF0aD0idXJsKCNjbGlwLXBhdGgpIj4KICAgIDxwYXRoIGlkPSJQYXRoXzM0NTM2IiBkYXRhLW5hbWU9IlBhdGggMzQ1MzYiIGQ9Ik03LjE1MywzLjEsNy43LDQuODU0YS40OTEuNDkxLDAsMCwwLC40Ni4zNWgxLjc3YS41MS41MSwwLDAsMSwuMjgzLjkxNkw4Ljc4Miw3LjIwNmEuNTI1LjUyNSwwLDAsMC0uMTc5LjU2NmwuNTQzLDEuNzU3YS40ODkuNDg5LDAsMCwxLS43NDQuNTY2TDYuOTc1LDkuMDA4YS40NzkuNDc5LDAsMCwwLS41NzMsMGwtMS40MiwxLjA4N2EuNDg4LjQ4OCwwLDAsMS0uNzQ0LS41NjZsLjU0My0xLjc1N0EuNTE0LjUxNCwwLDAsMCw0LjYsNy4yMDZMMy4xNzUsNi4xMTlBLjUxLjUxLDAsMCwxLDMuNDU4LDUuMmgxLjc3YS40OTIuNDkyLDAsMCwwLC40NjItLjM1TDYuMjMxLDMuMWEuNDc4LjQ3OCwwLDAsMSwuOTIyLDBaTTIuOTc0LDkuODI1QTUuOTQzLDUuOTQzLDAsMCwxLDIuMjgyLDguNDEsMS41NDIsMS41NDIsMCwwLDAsLjgxOCw3LjM1M0gwQTguMjUsOC4yNSwwLDAsMCwuNDMxLDkuMjgxYTEuNSwxLjUsMCwwLDAsMi41NDMuNTQzWk0xMS4xLDguNDFhNS45NjksNS45NjksMCwwLDEtLjY5MiwxLjQxNSwxLjUsMS41LDAsMCwwLDIuNTQ0LS41NDMsOC4yNDksOC4yNDksMCwwLDAsLjQzMS0xLjkyOGgtLjgxOUExLjU0OSwxLjU0OSwwLDAsMCwxMS4xLDguNDFaTTUuOTQ5LDExLjY2M2E1LjE5Myw1LjE5MywwLDAsMS0xLjQyLS40NTQsMS40NjYsMS40NjYsMCwwLDAtMS43LjM1bC0uNTk1LjYxOGE3LjIxLDcuMjEsMCwwLDAsMS41NDcuOTksMS41NjgsMS41NjgsMCwwLDAsMi4xNzItMS41Wm0yLjkwNy0uNDU0YTUuMiw1LjIsMCwwLDEtMS40Mi40NTQsMS41NjQsMS41NjQsMCwwLDAsMi4xNjQsMS41LDcuMDE0LDcuMDE0LDAsMCwwLDEuNTQ3LS45OWwtLjYtLjYxOEExLjQ1MSwxLjQ1MSwwLDAsMCw4Ljg1NywxMS4yMDlabTIuNDYyLTYuODQyYTUuNzY5LDUuNzY5LDAsMCwxLC41MDYsMS40ODksMS40OTQsMS40OTQsMCwwLDAsMS40MTMtMi4xODEsOC42NDUsOC42NDUsMCwwLDAtMS4wNTYtMS42NjhsLS41OC41NzNhMS41NjUsMS41NjUsMCwwLDAtLjI4MywxLjc4N1ptLTkuMjI5LDBhNS42NjgsNS42NjgsMCwwLDAtLjUxMywxLjQ4OUExLjQ5NCwxLjQ5NCwwLDAsMSwuMTYzLDMuNjc1LDguNjY1LDguNjY1LDAsMCwxLDEuMjIsMmwuNTguNTgxYTEuNTU1LDEuNTU1LDAsMCwxLC4yOSwxLjc4N1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAxIC0wLjUxMSkiIGZpbGw9IiNmZmYiLz4KICA8L2c+Cjwvc3ZnPgo="
                                  class="mr-2"
                                />
                                <span>Chuyên gia</span>
                              </div>
                            </div>
                            <!---->
                          </div>
                        </div>
                      </div>
                      <div class="bodyBox mb-015rem numberContent">
                        <div class="d-flex w-100">
                          <div class="flexBox">
                            <p class="number gain green">30.89%</p>
                            <p class="title">Lợi nhuận (30N)</p>
                          </div>
                          <div class="flexBox">
                            <p class="number">0</p>
                            <p class="title">Người sao chép</p>
                          </div>
                          <div class="flexBox">
                            <p class="number">5%</p>
                            <p class="title">Chia sẻ ln</p>
                          </div>
                        </div>
                      </div>
                      <div class="bodyBox">
                        <button
                          class="btn btn-secondary startCopy w-100 d-flex align-items-center justify-content-center disabled"
                        >
                          <img
                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOS4wNTciIGhlaWdodD0iMTkuMDU3IiB2aWV3Qm94PSIwIDAgMTkuMDU3IDE5LjA1NyI+CiAgPHBhdGggaWQ9IlBhdGhfMzQ1NDkiIGRhdGEtbmFtZT0iUGF0aCAzNDU0OSIgZD0iTTExLjUyOCwyYTkuNTI4LDkuNTI4LDAsMSwwLDkuNTI4LDkuNTI4QTkuNTI4LDkuNTI4LDAsMCwwLDExLjUyOCwyWm00LjkyMyw5LjhMOC44MjksMTYuMjQ5YS4zMTguMzE4LDAsMCwxLS40NzYtLjI3NFY3LjA4MmEuMzE4LjMxOCwwLDAsMSwuNDc2LS4yNzRsNy42MjMsNC40NDdhLjMxOC4zMTgsMCwwLDEsMCwuNTQ5WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIgLTIpIiBmaWxsPSIjZmZmIi8+Cjwvc3ZnPgo="
                          />
                          <span class="ml-2">Bắt đầu sao chép</span>
                        </button>
                      </div>
                      <div class="footerBox">
                        <p class="mb-0">
                          <span class="text mr-1">Đầu tư tối thiểu</span
                          ><span class="number">$50.00</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-lg-6 col-xl-4">
                  <div class="communityItem">
                    <div class="boxProfile">
                      <div class="headerBox d-flex">
                        <img
                          src="https://projgapidiagnostics.blob.core.windows.net/kyc-data/67/avatar/27fa12b8-489f-4483-a5f0-2d434281a101.jpeg?sv=2016-05-31&amp;sig=dXgf18yFQIsYlHKTWr6zGUl1pWHbae9v%2BdZDEVkhgqo%3D&amp;spr=https&amp;se=2020-10-15T10%3A31%3A33Z&amp;srt=o&amp;ss=bf&amp;sp=r"
                          width="84"
                          height="84"
                          class="avatar"
                        />
                        <div class="profile align-self-center w-100">
                          <p class="name mb-2">quanghai</p>
                          <div class="d-flex w-100">
                            <div class="label orange mr-2">
                              <div class="d-flex align-items-center">
                                <img
                                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTMuNDAxIiBoZWlnaHQ9IjEzLjQwMSIgdmlld0JveD0iMCAwIDEzLjQwMSAxMy40MDEiPgogIDxkZWZzPgogICAgPGNsaXBQYXRoIGlkPSJjbGlwLXBhdGgiPgogICAgICA8cGF0aCBpZD0iUGF0aF8zNDUzNyIgZGF0YS1uYW1lPSJQYXRoIDM0NTM3IiBkPSJNMCwwSDEzLjRWMTMuNEgwWiIgZmlsbD0iI2ZmZiIvPgogICAgPC9jbGlwUGF0aD4KICA8L2RlZnM+CiAgPGcgaWQ9Im1hc3Rlci1leHBlcmllbmNlXzUiIGNsaXAtcGF0aD0idXJsKCNjbGlwLXBhdGgpIj4KICAgIDxwYXRoIGlkPSJQYXRoXzM0NTM2IiBkYXRhLW5hbWU9IlBhdGggMzQ1MzYiIGQ9Ik03LjE1MywzLjEsNy43LDQuODU0YS40OTEuNDkxLDAsMCwwLC40Ni4zNWgxLjc3YS41MS41MSwwLDAsMSwuMjgzLjkxNkw4Ljc4Miw3LjIwNmEuNTI1LjUyNSwwLDAsMC0uMTc5LjU2NmwuNTQzLDEuNzU3YS40ODkuNDg5LDAsMCwxLS43NDQuNTY2TDYuOTc1LDkuMDA4YS40NzkuNDc5LDAsMCwwLS41NzMsMGwtMS40MiwxLjA4N2EuNDg4LjQ4OCwwLDAsMS0uNzQ0LS41NjZsLjU0My0xLjc1N0EuNTE0LjUxNCwwLDAsMCw0LjYsNy4yMDZMMy4xNzUsNi4xMTlBLjUxLjUxLDAsMCwxLDMuNDU4LDUuMmgxLjc3YS40OTIuNDkyLDAsMCwwLC40NjItLjM1TDYuMjMxLDMuMWEuNDc4LjQ3OCwwLDAsMSwuOTIyLDBaTTIuOTc0LDkuODI1QTUuOTQzLDUuOTQzLDAsMCwxLDIuMjgyLDguNDEsMS41NDIsMS41NDIsMCwwLDAsLjgxOCw3LjM1M0gwQTguMjUsOC4yNSwwLDAsMCwuNDMxLDkuMjgxYTEuNSwxLjUsMCwwLDAsMi41NDMuNTQzWk0xMS4xLDguNDFhNS45NjksNS45NjksMCwwLDEtLjY5MiwxLjQxNSwxLjUsMS41LDAsMCwwLDIuNTQ0LS41NDMsOC4yNDksOC4yNDksMCwwLDAsLjQzMS0xLjkyOGgtLjgxOUExLjU0OSwxLjU0OSwwLDAsMCwxMS4xLDguNDFaTTUuOTQ5LDExLjY2M2E1LjE5Myw1LjE5MywwLDAsMS0xLjQyLS40NTQsMS40NjYsMS40NjYsMCwwLDAtMS43LjM1bC0uNTk1LjYxOGE3LjIxLDcuMjEsMCwwLDAsMS41NDcuOTksMS41NjgsMS41NjgsMCwwLDAsMi4xNzItMS41Wm0yLjkwNy0uNDU0YTUuMiw1LjIsMCwwLDEtMS40Mi40NTQsMS41NjQsMS41NjQsMCwwLDAsMi4xNjQsMS41LDcuMDE0LDcuMDE0LDAsMCwwLDEuNTQ3LS45OWwtLjYtLjYxOEExLjQ1MSwxLjQ1MSwwLDAsMCw4Ljg1NywxMS4yMDlabTIuNDYyLTYuODQyYTUuNzY5LDUuNzY5LDAsMCwxLC41MDYsMS40ODksMS40OTQsMS40OTQsMCwwLDAsMS40MTMtMi4xODEsOC42NDUsOC42NDUsMCwwLDAtMS4wNTYtMS42NjhsLS41OC41NzNhMS41NjUsMS41NjUsMCwwLDAtLjI4MywxLjc4N1ptLTkuMjI5LDBhNS42NjgsNS42NjgsMCwwLDAtLjUxMywxLjQ4OUExLjQ5NCwxLjQ5NCwwLDAsMSwuMTYzLDMuNjc1LDguNjY1LDguNjY1LDAsMCwxLDEuMjIsMmwuNTguNTgxYTEuNTU1LDEuNTU1LDAsMCwxLC4yOSwxLjc4N1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAxIC0wLjUxMSkiIGZpbGw9IiNmZmYiLz4KICA8L2c+Cjwvc3ZnPgo="
                                  class="mr-2"
                                />
                                <span>Chuyên gia</span>
                              </div>
                            </div>
                            <!---->
                          </div>
                        </div>
                      </div>
                      <div class="bodyBox mb-015rem numberContent">
                        <div class="d-flex w-100">
                          <div class="flexBox">
                            <p class="number gain green">27.00%</p>
                            <p class="title">Lợi nhuận (30N)</p>
                          </div>
                          <div class="flexBox">
                            <p class="number">0</p>
                            <p class="title">Người sao chép</p>
                          </div>
                          <div class="flexBox">
                            <p class="number">10%</p>
                            <p class="title">Chia sẻ ln</p>
                          </div>
                        </div>
                      </div>
                      <div class="bodyBox">
                        <button
                          class="btn btn-secondary startCopy w-100 d-flex align-items-center justify-content-center disabled"
                        >
                          <img
                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOS4wNTciIGhlaWdodD0iMTkuMDU3IiB2aWV3Qm94PSIwIDAgMTkuMDU3IDE5LjA1NyI+CiAgPHBhdGggaWQ9IlBhdGhfMzQ1NDkiIGRhdGEtbmFtZT0iUGF0aCAzNDU0OSIgZD0iTTExLjUyOCwyYTkuNTI4LDkuNTI4LDAsMSwwLDkuNTI4LDkuNTI4QTkuNTI4LDkuNTI4LDAsMCwwLDExLjUyOCwyWm00LjkyMyw5LjhMOC44MjksMTYuMjQ5YS4zMTguMzE4LDAsMCwxLS40NzYtLjI3NFY3LjA4MmEuMzE4LjMxOCwwLDAsMSwuNDc2LS4yNzRsNy42MjMsNC40NDdhLjMxOC4zMTgsMCwwLDEsMCwuNTQ5WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIgLTIpIiBmaWxsPSIjZmZmIi8+Cjwvc3ZnPgo="
                          />
                          <span class="ml-2">Bắt đầu sao chép</span>
                        </button>
                      </div>
                      <div class="footerBox">
                        <p class="mb-0">
                          <span class="text mr-1">Đầu tư tối thiểu</span
                          ><span class="number">$1,000.00</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-lg-6 col-xl-4">
                  <div class="communityItem">
                    <div class="boxProfile">
                      <div class="headerBox d-flex">
                        <img
                          src="https://projgapidiagnostics.blob.core.windows.net/kyc-data/1587367477659/avatar/d5721070-bc7e-4f04-9774-c9099b2a345a_thumbnail.jpg?sv=2016-05-31&amp;sig=dXgf18yFQIsYlHKTWr6zGUl1pWHbae9v%2BdZDEVkhgqo%3D&amp;spr=https&amp;se=2020-10-15T10%3A31%3A33Z&amp;srt=o&amp;ss=bf&amp;sp=r"
                          width="84"
                          height="84"
                          class="avatar"
                        />
                        <div class="profile align-self-center w-100">
                          <p class="name mb-2">taittq</p>
                          <div class="d-flex w-100">
                            <div class="label orange mr-2">
                              <div class="d-flex align-items-center">
                                <img
                                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTMuNDAxIiBoZWlnaHQ9IjEzLjQwMSIgdmlld0JveD0iMCAwIDEzLjQwMSAxMy40MDEiPgogIDxkZWZzPgogICAgPGNsaXBQYXRoIGlkPSJjbGlwLXBhdGgiPgogICAgICA8cGF0aCBpZD0iUGF0aF8zNDUzNyIgZGF0YS1uYW1lPSJQYXRoIDM0NTM3IiBkPSJNMCwwSDEzLjRWMTMuNEgwWiIgZmlsbD0iI2ZmZiIvPgogICAgPC9jbGlwUGF0aD4KICA8L2RlZnM+CiAgPGcgaWQ9Im1hc3Rlci1leHBlcmllbmNlXzUiIGNsaXAtcGF0aD0idXJsKCNjbGlwLXBhdGgpIj4KICAgIDxwYXRoIGlkPSJQYXRoXzM0NTM2IiBkYXRhLW5hbWU9IlBhdGggMzQ1MzYiIGQ9Ik03LjE1MywzLjEsNy43LDQuODU0YS40OTEuNDkxLDAsMCwwLC40Ni4zNWgxLjc3YS41MS41MSwwLDAsMSwuMjgzLjkxNkw4Ljc4Miw3LjIwNmEuNTI1LjUyNSwwLDAsMC0uMTc5LjU2NmwuNTQzLDEuNzU3YS40ODkuNDg5LDAsMCwxLS43NDQuNTY2TDYuOTc1LDkuMDA4YS40NzkuNDc5LDAsMCwwLS41NzMsMGwtMS40MiwxLjA4N2EuNDg4LjQ4OCwwLDAsMS0uNzQ0LS41NjZsLjU0My0xLjc1N0EuNTE0LjUxNCwwLDAsMCw0LjYsNy4yMDZMMy4xNzUsNi4xMTlBLjUxLjUxLDAsMCwxLDMuNDU4LDUuMmgxLjc3YS40OTIuNDkyLDAsMCwwLC40NjItLjM1TDYuMjMxLDMuMWEuNDc4LjQ3OCwwLDAsMSwuOTIyLDBaTTIuOTc0LDkuODI1QTUuOTQzLDUuOTQzLDAsMCwxLDIuMjgyLDguNDEsMS41NDIsMS41NDIsMCwwLDAsLjgxOCw3LjM1M0gwQTguMjUsOC4yNSwwLDAsMCwuNDMxLDkuMjgxYTEuNSwxLjUsMCwwLDAsMi41NDMuNTQzWk0xMS4xLDguNDFhNS45NjksNS45NjksMCwwLDEtLjY5MiwxLjQxNSwxLjUsMS41LDAsMCwwLDIuNTQ0LS41NDMsOC4yNDksOC4yNDksMCwwLDAsLjQzMS0xLjkyOGgtLjgxOUExLjU0OSwxLjU0OSwwLDAsMCwxMS4xLDguNDFaTTUuOTQ5LDExLjY2M2E1LjE5Myw1LjE5MywwLDAsMS0xLjQyLS40NTQsMS40NjYsMS40NjYsMCwwLDAtMS43LjM1bC0uNTk1LjYxOGE3LjIxLDcuMjEsMCwwLDAsMS41NDcuOTksMS41NjgsMS41NjgsMCwwLDAsMi4xNzItMS41Wm0yLjkwNy0uNDU0YTUuMiw1LjIsMCwwLDEtMS40Mi40NTQsMS41NjQsMS41NjQsMCwwLDAsMi4xNjQsMS41LDcuMDE0LDcuMDE0LDAsMCwwLDEuNTQ3LS45OWwtLjYtLjYxOEExLjQ1MSwxLjQ1MSwwLDAsMCw4Ljg1NywxMS4yMDlabTIuNDYyLTYuODQyYTUuNzY5LDUuNzY5LDAsMCwxLC41MDYsMS40ODksMS40OTQsMS40OTQsMCwwLDAsMS40MTMtMi4xODEsOC42NDUsOC42NDUsMCwwLDAtMS4wNTYtMS42NjhsLS41OC41NzNhMS41NjUsMS41NjUsMCwwLDAtLjI4MywxLjc4N1ptLTkuMjI5LDBhNS42NjgsNS42NjgsMCwwLDAtLjUxMywxLjQ4OUExLjQ5NCwxLjQ5NCwwLDAsMSwuMTYzLDMuNjc1LDguNjY1LDguNjY1LDAsMCwxLDEuMjIsMmwuNTguNTgxYTEuNTU1LDEuNTU1LDAsMCwxLC4yOSwxLjc4N1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAxIC0wLjUxMSkiIGZpbGw9IiNmZmYiLz4KICA8L2c+Cjwvc3ZnPgo="
                                  class="mr-2"
                                />
                                <span>Chuyên gia</span>
                              </div>
                            </div>
                            <!---->
                          </div>
                        </div>
                      </div>
                      <div class="bodyBox mb-015rem numberContent">
                        <div class="d-flex w-100">
                          <div class="flexBox">
                            <p class="number gain green">23.79%</p>
                            <p class="title">Lợi nhuận (30N)</p>
                          </div>
                          <div class="flexBox">
                            <p class="number">0</p>
                            <p class="title">Người sao chép</p>
                          </div>
                          <div class="flexBox">
                            <p class="number">10%</p>
                            <p class="title">Chia sẻ ln</p>
                          </div>
                        </div>
                      </div>
                      <div class="bodyBox">
                        <button
                          class="btn btn-secondary startCopy w-100 d-flex align-items-center justify-content-center disabled"
                        >
                          <img
                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOS4wNTciIGhlaWdodD0iMTkuMDU3IiB2aWV3Qm94PSIwIDAgMTkuMDU3IDE5LjA1NyI+CiAgPHBhdGggaWQ9IlBhdGhfMzQ1NDkiIGRhdGEtbmFtZT0iUGF0aCAzNDU0OSIgZD0iTTExLjUyOCwyYTkuNTI4LDkuNTI4LDAsMSwwLDkuNTI4LDkuNTI4QTkuNTI4LDkuNTI4LDAsMCwwLDExLjUyOCwyWm00LjkyMyw5LjhMOC44MjksMTYuMjQ5YS4zMTguMzE4LDAsMCwxLS40NzYtLjI3NFY3LjA4MmEuMzE4LjMxOCwwLDAsMSwuNDc2LS4yNzRsNy42MjMsNC40NDdhLjMxOC4zMTgsMCwwLDEsMCwuNTQ5WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIgLTIpIiBmaWxsPSIjZmZmIi8+Cjwvc3ZnPgo="
                          />
                          <span class="ml-2">Bắt đầu sao chép</span>
                        </button>
                      </div>
                      <div class="footerBox">
                        <p class="mb-0">
                          <span class="text mr-1">Đầu tư tối thiểu</span
                          ><span class="number">$50.00</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!---->
              <div class="mt-4">
                <div
                  data-v-74650a7f=""
                  id="paging"
                  class="paging backgroundBo noPadding"
                >
                  <ul data-v-74650a7f="" id="page">
                    <!---->
                    <!---->
                    <!---->
                    <li data-v-74650a7f="">
                      <span data-v-74650a7f=""
                        ><a
                          data-v-74650a7f=""
                          href="javascript:void(0)"
                          data-page="1"
                          class="active"
                          >1</a
                        ></span
                      >
                    </li>
                    <li data-v-74650a7f="">
                      <span data-v-74650a7f=""
                        ><a data-v-74650a7f="" href="?page=2" data-page="2"
                          >2</a
                        ></span
                      >
                    </li>
                    <li data-v-74650a7f="">
                      <span data-v-74650a7f=""
                        ><a data-v-74650a7f="" href="?page=3" data-page="3"
                          >3</a
                        ></span
                      >
                    </li>
                    <li data-v-74650a7f="" class="pc">
                      <span data-v-74650a7f=""
                        ><a
                          data-v-74650a7f=""
                          href="javascript:void(0);"
                          class="text"
                          >...</a
                        ></span
                      >
                    </li>
                    <li data-v-74650a7f="" class="pc">
                      <span data-v-74650a7f=""
                        ><a data-v-74650a7f="" href="?page=27">27</a></span
                      >
                    </li>
                    <li data-v-74650a7f="">
                      <span data-v-74650a7f=""
                        ><a data-v-74650a7f="" href="?page=2" data-page="2"
                          ><svg
                            data-v-74650a7f=""
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 4.68 8.109"
                            style="width: 7px"
                          >
                            <g
                              data-v-74650a7f=""
                              id="small-left"
                              transform="translate(17.055 17.484) rotate(180)"
                            >
                              <path
                                data-v-74650a7f=""
                                id="Path_24"
                                data-name="Path 24"
                                d="M16.43,16.859,13,13.43,16.43,10"
                                transform="translate(0 0)"
                                class="btnNext"
                              ></path>
                            </g></svg></a
                      ></span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            tabindex="-1"
            role="dialog"
            aria-hidden="true"
            class="modal fade modal-info popupStartCopying"
          >
            <div role="document" class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <div
                    class="d-flex justify-content-between algin-items-center w-100"
                  >
                    <label class="titleHeader">Bắt đầu sao chép</label>
                    <button
                      type="button"
                      aria-label="Close"
                      class="closeBtnHeader ml-auto"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                      >
                        <g
                          stroke-linecap="square"
                          stroke-linejoin="miter"
                          stroke-width="2"
                          fill="currentColor"
                          stroke="currentColor"
                          class="nc-icon-wrapper"
                        >
                          <g class="nc-interact_menu-close-2-o-32">
                            <path
                              fill="currentColor"
                              stroke="currentColor"
                              stroke-miterlimit="10"
                              d="M2 6h28"
                              transform="translate(0 10.00) rotate(45.00 16 6)"
                            ></path>
                            <path
                              data-color="color-2"
                              fill="currentColor"
                              stroke-miterlimit="10"
                              d="M2 16h28"
                              opacity="0"
                            ></path>
                            <path
                              fill="currentColor"
                              stroke="currentColor"
                              stroke-miterlimit="10"
                              d="M2 26h28"
                              transform="translate(0 -10) rotate(-45 16 26)"
                            ></path>
                          </g>
                        </g>
                      </svg>
                    </button>
                  </div>
                </div>
                <div class="modal-body">
                  <div class="headerBox d-flex align-items-center">
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgdmlld0JveD0iMCAwIDgwIDgwIj4KICA8ZyBpZD0iR3JvdXBfMjA5OTgiIGRhdGEtbmFtZT0iR3JvdXAgMjA5OTgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMzg5IC0wLjQ0MykiPgogICAgPGcgaWQ9Ikdyb3VwXzIwOTg2IiBkYXRhLW5hbWU9Ikdyb3VwIDIwOTg2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC4zODkpIj4KICAgICAgPGcgaWQ9Ikdyb3VwXzIwOTgyIiBkYXRhLW5hbWU9Ikdyb3VwIDIwOTgyIj4KICAgICAgICA8Y2lyY2xlIGlkPSJFbGxpcHNlXzE5MTgiIGRhdGEtbmFtZT0iRWxsaXBzZSAxOTE4IiBjeD0iNDAiIGN5PSI0MCIgcj0iNDAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMC40NDMpIiBmaWxsPSIjZWNmNGZmIi8+CiAgICAgIDwvZz4KICAgICAgPGcgaWQ9Ikdyb3VwXzIwOTgzIiBkYXRhLW5hbWU9Ikdyb3VwIDIwOTgzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4LjM0OCA3Ljg3NCkiPgogICAgICAgIDxwYXRoIGlkPSJQYXRoXzM0ODg1IiBkYXRhLW5hbWU9IlBhdGggMzQ4ODUiIGQ9Ik0xMDYuMzM1LDUwLjc1OWEzOS43MTQsMzkuNzE0LDAsMCwxLTU1LjU3Niw1NS41NzYsMzkuNzEzLDM5LjcxMywwLDEsMCw1NS41NzYtNTUuNTc2WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTUwLjc1OSAtNTAuNzU5KSIgZmlsbD0iI2RkZWFmYiIvPgogICAgICA8L2c+CiAgICAgIDxnIGlkPSJHcm91cF8yMDk4NCIgZGF0YS1uYW1lPSJHcm91cCAyMDk4NCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOS45MDYgNTIuNzI2KSI+CiAgICAgICAgPHBhdGggaWQ9IlBhdGhfMzQ4ODYiIGRhdGEtbmFtZT0iUGF0aCAzNDg4NiIgZD0iTTEyMS4zNjUsMzUyLjU3OUEyMC45NDUsMjAuOTQ1LDAsMCwwLDEwMi4xMTksMzM5LjlIODAuMDU0YTIwLjk0NSwyMC45NDUsMCwwLDAtMTkuMjQ2LDEyLjY3NiwzOS43MDUsMzkuNzA1LDAsMCwwLDYwLjU1NywwWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTYwLjgwOCAtMzM5LjkwMykiIGZpbGw9IiM1MjQ3OTgiLz4KICAgICAgPC9nPgogICAgICA8ZyBpZD0iR3JvdXBfMjA5ODUiIGRhdGEtbmFtZT0iR3JvdXAgMjA5ODUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDkuOTA2IDU2LjQyMSkiPgogICAgICAgIDxwYXRoIGlkPSJQYXRoXzM0ODg3IiBkYXRhLW5hbWU9IlBhdGggMzQ4ODciIGQ9Ik0xMjEuMzY1LDM3Mi43YTIxLjAxOSwyMS4wMTksMCwwLDAtNy4zNy04Ljk4MUEzOS43MTcsMzkuNzE3LDAsMCwxLDYxLjEsMzcyLjA1MmMtLjEuMjE1LS4yLjQzMS0uMjk0LjY1YTM5LjcwNSwzOS43MDUsMCwwLDAsNjAuNTU3LDBaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjAuODA4IC0zNjMuNzIxKSIgZmlsbD0iIzQ1M2Q4MSIvPgogICAgICA8L2c+CiAgICA8L2c+CiAgICA8ZyBpZD0iR3JvdXBfMjA5ODciIGRhdGEtbmFtZT0iR3JvdXAgMjA5ODciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI1LjM5MyA3Ljg2MikiPgogICAgICA8cGF0aCBpZD0iUGF0aF8zNDg4OCIgZGF0YS1uYW1lPSJQYXRoIDM0ODg4IiBkPSJNMTkxLjQsNTUuODE1bC0zLjUwOS0zLjMzNmE2LjUyNCw2LjUyNCwwLDAsMC02LjU5NS0xLjQ0OWwtMTIuNjA2LDQuMjg1YTguMTY1LDguMTY1LDAsMCwwLTUuNTM3LDcuNzMxdjUuODQybC42MjEsMS44MTRoMjguNDU5bC42Mi0xLjgxNFY1OS4yQTQuNjc2LDQuNjc2LDAsMCwwLDE5MS40LDU1LjgxNVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNjMuMTQ5IC01MC42ODIpIiBmaWxsPSIjZmZkMDY0Ii8+CiAgICA8L2c+CiAgICA8ZyBpZD0iR3JvdXBfMjA5ODgiIGRhdGEtbmFtZT0iR3JvdXAgMjA5ODgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM4Ljc0OSA3Ljg2MikiPgogICAgICA8cGF0aCBpZD0iUGF0aF8zNDg4OSIgZGF0YS1uYW1lPSJQYXRoIDM0ODg5IiBkPSJNMjY0LjE0LDU1LjgxNWwtMy41MDktMy4zMzZhNi41MjQsNi41MjQsMCwwLDAtNi41OTUtMS40NDlsLTQuNzg3LDEuNjI3YTYuNTIyLDYuNTIyLDAsMCwxLDMuOTQ4LDEuNzcybDMuNTA5LDMuMzM2YTQuNjc1LDQuNjc1LDAsMCwxLDEuNDU0LDMuMzg4VjcwLjdoNi44MTRsLjYyLTEuODE0VjU5LjJhNC42NzYsNC42NzYsMCwwLDAtMS40NTQtMy4zODhaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjQ5LjI0OSAtNTAuNjgyKSIgZmlsbD0iI2ZmYzI1MCIvPgogICAgPC9nPgogICAgPGcgaWQ9Ikdyb3VwXzIwOTg5IiBkYXRhLW5hbWU9Ikdyb3VwIDIwOTg5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1Mi45ODggMjguMTk1KSI+CiAgICAgIDxwYXRoIGlkPSJQYXRoXzM0ODkwIiBkYXRhLW5hbWU9IlBhdGggMzQ4OTAiIGQ9Ik0zNDIuMiwxODQuOTY1Yy0xLjUyMiwzLjIzMS0xLjY1Myw3LjUyNy4yNTgsOC40MjdzNS4xMzktMS45MzgsNi42NjEtNS4xNjkuNTM4LTUuMTYxLTEuMzcyLTYuMDYxUzM0My43MjEsMTgxLjczNCwzNDIuMiwxODQuOTY1WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTM0MS4wNCAtMTgxLjc2KSIgZmlsbD0iI2ZmY2JiZSIvPgogICAgPC9nPgogICAgPGcgaWQ9Ikdyb3VwXzIwOTkwIiBkYXRhLW5hbWU9Ikdyb3VwIDIwOTkwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyOS44MjUgNDMuNjQ4KSI+CiAgICAgIDxwYXRoIGlkPSJQYXRoXzM0ODkxIiBkYXRhLW5hbWU9IlBhdGggMzQ4OTEiIGQ9Ik0yMDMuOTU0LDI5OS40NTdoLTMuNjMzYTguNiw4LjYsMCwwLDEtOC42LTguNlYyODEuMzhoMjAuODM2djkuNDc2QTguNiw4LjYsMCwwLDEsMjAzLjk1NCwyOTkuNDU3WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE5MS43MTkgLTI4MS4zOCkiIGZpbGw9IiNlYWFjOWQiLz4KICAgIDwvZz4KICAgIDxwYXRoIGlkPSJQYXRoXzM0ODkyIiBkYXRhLW5hbWU9IlBhdGggMzQ4OTIiIGQ9Ik0yNDUuNTgyLDI4MS4zOHY5LjQ3NmE4LjYsOC42LDAsMCwxLTcuMjMzLDguNDkyLDguNjY4LDguNjY4LDAsMCwwLDEuMzY4LjExaDMuNjMzYTguNiw4LjYsMCwwLDAsOC42LTguNlYyODEuMzhaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjAxLjI5MSAtMjM3LjczMikiIGZpbGw9IiNkZjkzODAiLz4KICAgIDxnIGlkPSJHcm91cF8yMDk5MSIgZGF0YS1uYW1lPSJHcm91cCAyMDk5MSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjUuMzkzIDIzLjM2OSkiPgogICAgICA8cGF0aCBpZD0iUGF0aF8zNDg5MyIgZGF0YS1uYW1lPSJQYXRoIDM0ODkzIiBkPSJNMTkwLjE1LDE1MC42NTNIMTY1Ljg0NGEyLjcsMi43LDAsMCwwLTIuNywyLjd2OS42YTE1LjY5MywxNS42OTMsMCwwLDAsNi45MzksMTMuMDI1bDQuMzE2LDIuOWE2LjQ0Niw2LjQ0NiwwLDAsMCwxLjM4Ny43MDYsMjEuMTcyLDIxLjE3MiwwLDAsMCwzLjAyOS0uMDQ5LDE1LjQ4NiwxNS40ODYsMCwwLDAsMy4yMjgtLjk2MmwzLjg2My0yLjZhMTUuNjkzLDE1LjY5MywwLDAsMCw2LjkzOS0xMy4wMjV2LTkuNmEyLjcsMi43LDAsMCwwLTIuNy0yLjdaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTYzLjE0NyAtMTUwLjY1MykiIGZpbGw9IiNmZmNiYmUiLz4KICAgIDwvZz4KICAgIDxnIGlkPSJHcm91cF8yMDk5MiIgZGF0YS1uYW1lPSJHcm91cCAyMDk5MiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzguMDM1IDIzLjM2OSkiPgogICAgICA8cGF0aCBpZD0iUGF0aF8zNDg5NCIgZGF0YS1uYW1lPSJQYXRoIDM0ODk0IiBkPSJNMjU3LjI4OSwxNTAuNjUydjEyLjNhMTUuNjk0LDE1LjY5NCwwLDAsMS02LjkzOSwxMy4wMjVsLTQuMzE2LDIuOWE2LjQ1NSw2LjQ1NSwwLDAsMS0xLjM4OS43MDYsNi40NDcsNi40NDcsMCwwLDAsNS44LS43MDZsNC4zMTYtMi45YTE1LjY5MywxNS42OTMsMCwwLDAsNi45MzktMTMuMDI1di05LjZhMi43LDIuNywwLDAsMC0yLjctMi43aC0xLjcxN1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yNDQuNjQ1IC0xNTAuNjUyKSIgZmlsbD0iI2VhYWM5ZCIvPgogICAgPC9nPgogICAgPGcgaWQ9Ikdyb3VwXzIwOTkzIiBkYXRhLW5hbWU9Ikdyb3VwIDIwOTkzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1Mi45ODggMjguMTk1KSI+CiAgICAgIDxwYXRoIGlkPSJQYXRoXzM0ODk1IiBkYXRhLW5hbWU9IlBhdGggMzQ4OTUiIGQ9Ik0zNDIuMiwxODQuOTY1Yy0xLjUyMiwzLjIzMS0xLjY1Myw3LjUyNy4yNTgsOC40MjdzNS4xMzktMS45MzgsNi42NjEtNS4xNjkuNTM4LTUuMTYxLTEuMzcyLTYuMDYxUzM0My43MjEsMTgxLjczNCwzNDIuMiwxODQuOTY1WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTM0MS4wNCAtMTgxLjc2KSIgZmlsbD0iI2VhYWM5ZCIvPgogICAgPC9nPgogICAgPGcgaWQ9Ikdyb3VwXzIwOTk0IiBkYXRhLW5hbWU9Ikdyb3VwIDIwOTk0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxOC42NzYgMjguMTk1KSI+CiAgICAgIDxwYXRoIGlkPSJQYXRoXzM0ODk2IiBkYXRhLW5hbWU9IlBhdGggMzQ4OTYiIGQ9Ik0xMjcuNTA5LDE4NC45NjVjMS41MjIsMy4yMzEsMS42NTMsNy41MjctLjI1OCw4LjQyN3MtNS4xMzktMS45MzgtNi42NjEtNS4xNjktLjUzOC01LjE2MSwxLjM3Mi02LjA2MVMxMjUuOTg3LDE4MS43MzQsMTI3LjUwOSwxODQuOTY1WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTExOS44NDUgLTE4MS43NikiIGZpbGw9IiNmZmNiYmUiLz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPgo="
                      width="84"
                      height="84"
                      class="avatar"
                    />
                    <div class="profile">
                      <p class="name mb-2"></p>
                      <div class="d-flex">
                        <div class="label orange mr-2">
                          <div class="d-flex align-items-center">
                            <img
                              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTMuNDAxIiBoZWlnaHQ9IjEzLjQwMSIgdmlld0JveD0iMCAwIDEzLjQwMSAxMy40MDEiPgogIDxkZWZzPgogICAgPGNsaXBQYXRoIGlkPSJjbGlwLXBhdGgiPgogICAgICA8cGF0aCBpZD0iUGF0aF8zNDUzNyIgZGF0YS1uYW1lPSJQYXRoIDM0NTM3IiBkPSJNMCwwSDEzLjRWMTMuNEgwWiIgZmlsbD0iI2ZmZiIvPgogICAgPC9jbGlwUGF0aD4KICA8L2RlZnM+CiAgPGcgaWQ9Im1hc3Rlci1leHBlcmllbmNlXzUiIGNsaXAtcGF0aD0idXJsKCNjbGlwLXBhdGgpIj4KICAgIDxwYXRoIGlkPSJQYXRoXzM0NTM2IiBkYXRhLW5hbWU9IlBhdGggMzQ1MzYiIGQ9Ik03LjE1MywzLjEsNy43LDQuODU0YS40OTEuNDkxLDAsMCwwLC40Ni4zNWgxLjc3YS41MS41MSwwLDAsMSwuMjgzLjkxNkw4Ljc4Miw3LjIwNmEuNTI1LjUyNSwwLDAsMC0uMTc5LjU2NmwuNTQzLDEuNzU3YS40ODkuNDg5LDAsMCwxLS43NDQuNTY2TDYuOTc1LDkuMDA4YS40NzkuNDc5LDAsMCwwLS41NzMsMGwtMS40MiwxLjA4N2EuNDg4LjQ4OCwwLDAsMS0uNzQ0LS41NjZsLjU0My0xLjc1N0EuNTE0LjUxNCwwLDAsMCw0LjYsNy4yMDZMMy4xNzUsNi4xMTlBLjUxLjUxLDAsMCwxLDMuNDU4LDUuMmgxLjc3YS40OTIuNDkyLDAsMCwwLC40NjItLjM1TDYuMjMxLDMuMWEuNDc4LjQ3OCwwLDAsMSwuOTIyLDBaTTIuOTc0LDkuODI1QTUuOTQzLDUuOTQzLDAsMCwxLDIuMjgyLDguNDEsMS41NDIsMS41NDIsMCwwLDAsLjgxOCw3LjM1M0gwQTguMjUsOC4yNSwwLDAsMCwuNDMxLDkuMjgxYTEuNSwxLjUsMCwwLDAsMi41NDMuNTQzWk0xMS4xLDguNDFhNS45NjksNS45NjksMCwwLDEtLjY5MiwxLjQxNSwxLjUsMS41LDAsMCwwLDIuNTQ0LS41NDMsOC4yNDksOC4yNDksMCwwLDAsLjQzMS0xLjkyOGgtLjgxOUExLjU0OSwxLjU0OSwwLDAsMCwxMS4xLDguNDFaTTUuOTQ5LDExLjY2M2E1LjE5Myw1LjE5MywwLDAsMS0xLjQyLS40NTQsMS40NjYsMS40NjYsMCwwLDAtMS43LjM1bC0uNTk1LjYxOGE3LjIxLDcuMjEsMCwwLDAsMS41NDcuOTksMS41NjgsMS41NjgsMCwwLDAsMi4xNzItMS41Wm0yLjkwNy0uNDU0YTUuMiw1LjIsMCwwLDEtMS40Mi40NTQsMS41NjQsMS41NjQsMCwwLDAsMi4xNjQsMS41LDcuMDE0LDcuMDE0LDAsMCwwLDEuNTQ3LS45OWwtLjYtLjYxOEExLjQ1MSwxLjQ1MSwwLDAsMCw4Ljg1NywxMS4yMDlabTIuNDYyLTYuODQyYTUuNzY5LDUuNzY5LDAsMCwxLC41MDYsMS40ODksMS40OTQsMS40OTQsMCwwLDAsMS40MTMtMi4xODEsOC42NDUsOC42NDUsMCwwLDAtMS4wNTYtMS42NjhsLS41OC41NzNhMS41NjUsMS41NjUsMCwwLDAtLjI4MywxLjc4N1ptLTkuMjI5LDBhNS42NjgsNS42NjgsMCwwLDAtLjUxMywxLjQ4OUExLjQ5NCwxLjQ5NCwwLDAsMSwuMTYzLDMuNjc1LDguNjY1LDguNjY1LDAsMCwxLDEuMjIsMmwuNTguNTgxYTEuNTU1LDEuNTU1LDAsMCwxLC4yOSwxLjc4N1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAxIC0wLjUxMSkiIGZpbGw9IiNmZmYiLz4KICA8L2c+Cjwvc3ZnPgo="
                              class="mr-2"
                            />
                            <span>Chuyên gia</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="btnClose">
                      <img
                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMSIgaGVpZ2h0PSIyMSIgdmlld0JveD0iMCAwIDIxIDIxIj4KICA8ZyBpZD0iR3JvdXBfMTExMzQiIGRhdGEtbmFtZT0iR3JvdXAgMTExMzQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjY4LjM0NSAtMjguMzQ1KSI+CiAgICA8Y2lyY2xlIGlkPSJFbGxpcHNlXzIwMSIgZGF0YS1uYW1lPSJFbGxpcHNlIDIwMSIgY3g9IjEwLjUiIGN5PSIxMC41IiByPSIxMC41IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjY4LjM0NSAyOC4zNDUpIiBmaWxsPSIjZmZmIiBvcGFjaXR5PSIwLjE5Ii8+CiAgICA8ZyBpZD0iZS1yZW1vdmUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyNzQuNjI0IDM0LjYyNCkiPgogICAgICA8cGF0aCBpZD0iUGF0aF8xMzc4NCIgZGF0YS1uYW1lPSJQYXRoIDEzNzg0IiBkPSJNOS4wNDcsMS4xNzZhLjU2OC41NjgsMCwwLDAtLjgyMiwwTDUuMTExLDQuMjg5LDIsMS4xNzZhLjU2OC41NjgsMCwwLDAtLjgyMiwwLC41NjguNTY4LDAsMCwwLDAsLjgyMkw0LjI4OSw1LjExMSwxLjE3Niw4LjIyNGEuNTY4LjU2OCwwLDAsMCwwLC44MjIuNTMzLjUzMywwLDAsMCwuNDExLjE3NkEuNTMzLjUzMywwLDAsMCwyLDkuMDQ3TDUuMTExLDUuOTM0LDguMjI0LDkuMDQ3YS41NjguNTY4LDAsMCwwLC44MjIsMCwuNTY4LjU2OCwwLDAsMCwwLS44MjJMNS45MzQsNS4xMTEsOS4wNDcsMkEuNTY4LjU2OCwwLDAsMCw5LjA0NywxLjE3NloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xIC0xKSIgZmlsbD0iI2ZmZiIvPgogICAgPC9nPgogIDwvZz4KPC9zdmc+Cg=="
                      />
                    </div>
                  </div>
                  <div class="userControl mb-2 mb-lg-0 mt-lg-2">
                    <p class="titleControl">Lượng đầu tư</p>
                    <div data-v-494d0791="" class="inputNumber">
                      <div
                        data-v-494d0791=""
                        class="control d-flex justify-content-between align-items-center"
                      >
                        <button
                          data-v-494d0791=""
                          type="button"
                          class="btn mr-1 d-flex align-items-center justify-content-center"
                        >
                          <svg
                            data-v-494d0791=""
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="2"
                            viewBox="0 0 14 2"
                            class="iconAction"
                          >
                            <g
                              data-v-494d0791=""
                              id="search-zoom-in"
                              transform="translate(-7.991 -13.991)"
                            >
                              <line
                                data-v-494d0791=""
                                id="Line_1142"
                                data-name="Line 1142"
                                x1="12"
                                transform="translate(8.991 14.991)"
                                fill="none"
                                stroke="#fff"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-miterlimit="10"
                                stroke-width="2"
                              ></line>
                            </g>
                          </svg>
                        </button>
                        <div
                          data-v-494d0791=""
                          class="inputControl d-flex flex-column"
                        >
                          <div data-v-494d0791="">
                            <div data-v-494d0791="" class="position-relative">
                              <input
                                data-v-50d90766=""
                                data-v-494d0791=""
                                type="text"
                                id="InputNumber"
                                placeholder="Đầu tư tối thiểu $undefined"
                                class="form-control w-100 input"
                              />
                              <!---->
                              <span data-v-494d0791="" class="btnClear"
                                ><img
                                  data-v-494d0791=""
                                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMSIgaGVpZ2h0PSIyMSIgdmlld0JveD0iMCAwIDIxIDIxIj4KICA8ZyBpZD0iR3JvdXBfMTExMzQiIGRhdGEtbmFtZT0iR3JvdXAgMTExMzQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjY4LjM0NSAtMjguMzQ1KSI+CiAgICA8Y2lyY2xlIGlkPSJFbGxpcHNlXzIwMSIgZGF0YS1uYW1lPSJFbGxpcHNlIDIwMSIgY3g9IjEwLjUiIGN5PSIxMC41IiByPSIxMC41IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjY4LjM0NSAyOC4zNDUpIiBmaWxsPSIjZmZmIiBvcGFjaXR5PSIwLjE5Ii8+CiAgICA8ZyBpZD0iZS1yZW1vdmUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyNzQuNjI0IDM0LjYyNCkiPgogICAgICA8cGF0aCBpZD0iUGF0aF8xMzc4NCIgZGF0YS1uYW1lPSJQYXRoIDEzNzg0IiBkPSJNOS4wNDcsMS4xNzZhLjU2OC41NjgsMCwwLDAtLjgyMiwwTDUuMTExLDQuMjg5LDIsMS4xNzZhLjU2OC41NjgsMCwwLDAtLjgyMiwwLC41NjguNTY4LDAsMCwwLDAsLjgyMkw0LjI4OSw1LjExMSwxLjE3Niw4LjIyNGEuNTY4LjU2OCwwLDAsMCwwLC44MjIuNTMzLjUzMywwLDAsMCwuNDExLjE3NkEuNTMzLjUzMywwLDAsMCwyLDkuMDQ3TDUuMTExLDUuOTM0LDguMjI0LDkuMDQ3YS41NjguNTY4LDAsMCwwLC44MjIsMCwuNTY4LjU2OCwwLDAsMCwwLS44MjJMNS45MzQsNS4xMTEsOS4wNDcsMkEuNTY4LjU2OCwwLDAsMCw5LjA0NywxLjE3NloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xIC0xKSIgZmlsbD0iI2ZmZiIvPgogICAgPC9nPgogIDwvZz4KPC9zdmc+Cg=="
                              /></span>
                            </div>
                          </div>
                        </div>
                        <button
                          data-v-494d0791=""
                          type="button"
                          class="btn ml-1 d-flex align-items-center justify-content-center"
                        >
                          <svg
                            data-v-494d0791=""
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            class="iconAction"
                          >
                            <g
                              data-v-494d0791=""
                              id="search-zoom-in"
                              transform="translate(-7.991 -7.991)"
                            >
                              <line
                                data-v-494d0791=""
                                id="Line_1141"
                                data-name="Line 1141"
                                y2="12"
                                transform="translate(14.991 8.991)"
                                fill="none"
                                stroke="#fff"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-miterlimit="10"
                                stroke-width="2"
                              ></line>
                              <line
                                data-v-494d0791=""
                                id="Line_1142"
                                data-name="Line 1142"
                                x1="12"
                                transform="translate(8.991 14.991)"
                                fill="none"
                                stroke="#fff"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-miterlimit="10"
                                stroke-width="2"
                              ></line>
                            </g>
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div class="d-flex mb-lg-1 mt-1">
                      <p class="subText">
                        Số dư Tài khoản Live:
                        <span class="numberBalance pointer">$0</span>
                      </p>
                      <a
                        data-toggle="collapse"
                        href="#collapseExample"
                        role="button"
                        aria-expanded="false"
                        aria-controls="collapseExample"
                        class="advanceText capitalize ml-auto"
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16.567"
                          height="10.771"
                          viewBox="0 0 16.567 10.771"
                          class="arrowCollapse"
                        >
                          <path
                            id="Path_1"
                            data-name="Path 1"
                            d="M1.78,9.357l5.8-5.783,5.8,5.783,1.78-1.78L7.576,0,0,7.576Z"
                            transform="translate(0.707 0.707)"
                            fill="#838fae"
                            stroke="#12013e"
                            stroke-width="1"
                          ></path>
                        </svg>
                        Nâng cao
                      </a>
                    </div>
                  </div>
                  <!---->
                  <div id="collapseExample" class="divInputAll collapse">
                    <div class="divider"></div>
                    <div class="yellow userControl mb-2 mb-lg-0">
                      <div class="d-flex">
                        <p class="titleControl align-self-center mb-0">
                          Tối thiểu
                        </p>
                        <div class="v-popover ml-3 vPopover">
                          <div
                            aria-describedby="popover_cbavmkodpq"
                            class="trigger"
                            style="display: inline-block"
                          >
                            <div class="btnTooltip">
                              <img
                                src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxNyAxNyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTcgMTc7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDpub25lO30KCS5zdDF7ZmlsbDojRkFDQzAwO30KPC9zdHlsZT4KPGcgaWQ9ImMtcXVlc3Rpb24iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMzk2IDAuMzk2KSI+Cgk8ZyBpZD0iRWxsaXBzZV8xODI1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxLjEwNCAxLjEwNCkiPgoJCTxnPgoJCQk8Y2lyY2xlIGNsYXNzPSJzdDAiIGN4PSI3IiBjeT0iNyIgcj0iNyIvPgoJCTwvZz4KCQk8Zz4KCQkJPHBhdGggY2xhc3M9InN0MSIgZD0iTTcsMTUuNWMtNC43LDAtOC41LTMuOC04LjUtOC41UzIuMy0xLjUsNy0xLjVjNC43LDAsOC41LDMuOCw4LjUsOC41UzExLjcsMTUuNSw3LDE1LjV6IE03LDAKCQkJCUMzLjEsMCwwLDMuMSwwLDdzMy4xLDcsNyw3YzMuOSwwLDctMy4xLDctN1MxMC45LDAsNywweiIvPgoJCTwvZz4KCTwvZz4KCTxnIGlkPSJxdWVzdGlvbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4yNiAyLjgxOSkiPgoJCTxnIGlkPSJQYXRoXzMwNzY4Ij4KCQkJPHBhdGggY2xhc3M9InN0MSIgZD0iTTcuMiw2LjljMC0wLjUsMC0xLDAuMi0xLjRjMC4yLTAuMywwLjUtMC42LDAuOC0wLjlDOSw0LjEsOS4zLDMuOCw5LjMsMy4xYzAtMC43LTAuNS0xLTEuMi0xCgkJCQljLTAuNywwLTEuMywwLjItMS45LDAuNWwtMC41LTFDNi41LDEuMiw3LjMsMSw4LjIsMUM4LjgsMSw5LjQsMS4yLDEwLDEuNWMwLjQsMC40LDAuNywwLjksMC43LDEuNWMwLDAuNS0wLjIsMS0wLjUsMS40CgkJCQlDOS44LDQuNyw5LjUsNSw5LjIsNS4yQzksNS40LDguNyw1LjcsOC41LDUuOWMtMC4yLDAuMy0wLjIsMC43LTAuMiwxQzguMyw2LjksNy4yLDYuOSw3LjIsNi45eiIvPgoJCTwvZz4KCQk8ZyBpZD0iRWxsaXBzZV8xODI3Ij4KCQkJPGNpcmNsZSBjbGFzcz0ic3QxIiBjeD0iNy44IiBjeT0iOC44IiByPSIwLjgiLz4KCQk8L2c+Cgk8L2c+CjwvZz4KPC9zdmc+Cg=="
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          class="toggleButton pointer isButtonOnOff ml-auto align-self-center"
                        >
                          <div class="status no"></div>
                        </div>
                      </div>
                      <div class="orange vueSlider" style="display: none">
                        <div data-v-494d0791="" class="inputNumber inputNumber">
                          <div
                            data-v-494d0791=""
                            class="control d-flex justify-content-between align-items-center"
                          >
                            <button
                              data-v-494d0791=""
                              type="button"
                              class="btn mr-1 d-flex align-items-center justify-content-center"
                            >
                              <svg
                                data-v-494d0791=""
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="2"
                                viewBox="0 0 14 2"
                                class="iconAction"
                              >
                                <g
                                  data-v-494d0791=""
                                  id="search-zoom-in"
                                  transform="translate(-7.991 -13.991)"
                                >
                                  <line
                                    data-v-494d0791=""
                                    id="Line_1142"
                                    data-name="Line 1142"
                                    x1="12"
                                    transform="translate(8.991 14.991)"
                                    fill="none"
                                    stroke="#fff"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-miterlimit="10"
                                    stroke-width="2"
                                  ></line>
                                </g>
                              </svg>
                            </button>
                            <div
                              data-v-494d0791=""
                              class="inputControl d-flex flex-column"
                            >
                              <div data-v-494d0791="">
                                <div
                                  data-v-494d0791=""
                                  class="position-relative input-wrapper"
                                >
                                  <input
                                    data-v-494d0791=""
                                    type="number"
                                    placeholder="1% - 5%"
                                    class="form-control input"
                                    style="width: 90px"
                                  />
                                  <!---->
                                  <span data-v-494d0791="" class="btnClear"
                                    ><img
                                      data-v-494d0791=""
                                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMSIgaGVpZ2h0PSIyMSIgdmlld0JveD0iMCAwIDIxIDIxIj4KICA8ZyBpZD0iR3JvdXBfMTExMzQiIGRhdGEtbmFtZT0iR3JvdXAgMTExMzQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjY4LjM0NSAtMjguMzQ1KSI+CiAgICA8Y2lyY2xlIGlkPSJFbGxpcHNlXzIwMSIgZGF0YS1uYW1lPSJFbGxpcHNlIDIwMSIgY3g9IjEwLjUiIGN5PSIxMC41IiByPSIxMC41IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjY4LjM0NSAyOC4zNDUpIiBmaWxsPSIjZmZmIiBvcGFjaXR5PSIwLjE5Ii8+CiAgICA8ZyBpZD0iZS1yZW1vdmUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyNzQuNjI0IDM0LjYyNCkiPgogICAgICA8cGF0aCBpZD0iUGF0aF8xMzc4NCIgZGF0YS1uYW1lPSJQYXRoIDEzNzg0IiBkPSJNOS4wNDcsMS4xNzZhLjU2OC41NjgsMCwwLDAtLjgyMiwwTDUuMTExLDQuMjg5LDIsMS4xNzZhLjU2OC41NjgsMCwwLDAtLjgyMiwwLC41NjguNTY4LDAsMCwwLDAsLjgyMkw0LjI4OSw1LjExMSwxLjE3Niw4LjIyNGEuNTY4LjU2OCwwLDAsMCwwLC44MjIuNTMzLjUzMywwLDAsMCwuNDExLjE3NkEuNTMzLjUzMywwLDAsMCwyLDkuMDQ3TDUuMTExLDUuOTM0LDguMjI0LDkuMDQ3YS41NjguNTY4LDAsMCwwLC44MjIsMCwuNTY4LjU2OCwwLDAsMCwwLS44MjJMNS45MzQsNS4xMTEsOS4wNDcsMkEuNTY4LjU2OCwwLDAsMCw5LjA0NywxLjE3NloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xIC0xKSIgZmlsbD0iI2ZmZiIvPgogICAgPC9nPgogIDwvZz4KPC9zdmc+Cg=="
                                  /></span>
                                </div>
                              </div>
                            </div>
                            <button
                              data-v-494d0791=""
                              type="button"
                              class="btn ml-1 d-flex align-items-center justify-content-center"
                            >
                              <svg
                                data-v-494d0791=""
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="14"
                                viewBox="0 0 14 14"
                                class="iconAction"
                              >
                                <g
                                  data-v-494d0791=""
                                  id="search-zoom-in"
                                  transform="translate(-7.991 -7.991)"
                                >
                                  <line
                                    data-v-494d0791=""
                                    id="Line_1141"
                                    data-name="Line 1141"
                                    y2="12"
                                    transform="translate(14.991 8.991)"
                                    fill="none"
                                    stroke="#fff"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-miterlimit="10"
                                    stroke-width="2"
                                  ></line>
                                  <line
                                    data-v-494d0791=""
                                    id="Line_1142"
                                    data-name="Line 1142"
                                    x1="12"
                                    transform="translate(8.991 14.991)"
                                    fill="none"
                                    stroke="#fff"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-miterlimit="10"
                                    stroke-width="2"
                                  ></line>
                                </g>
                              </svg>
                            </button>
                          </div>
                        </div>
                        <div class="wrap-vue-slider">
                          <!---->
                        </div>
                      </div>
                    </div>
                    <div class="divider"></div>
                    <div class="green userControl mb-2 mb-lg-0">
                      <div class="d-flex">
                        <p class="titleControl align-self-center mb-0">
                          Tối đa
                        </p>
                        <div class="v-popover ml-3 vPopover">
                          <div
                            aria-describedby="popover_xvu0kak38p"
                            class="trigger"
                            style="display: inline-block"
                          >
                            <div class="btnTooltip">
                              <img
                                src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxNyAxNyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTcgMTc7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDpub25lO30KCS5zdDF7ZmlsbDojRkFDQzAwO30KPC9zdHlsZT4KPGcgaWQ9ImMtcXVlc3Rpb24iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMzk2IDAuMzk2KSI+Cgk8ZyBpZD0iRWxsaXBzZV8xODI1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxLjEwNCAxLjEwNCkiPgoJCTxnPgoJCQk8Y2lyY2xlIGNsYXNzPSJzdDAiIGN4PSI3IiBjeT0iNyIgcj0iNyIvPgoJCTwvZz4KCQk8Zz4KCQkJPHBhdGggY2xhc3M9InN0MSIgZD0iTTcsMTUuNWMtNC43LDAtOC41LTMuOC04LjUtOC41UzIuMy0xLjUsNy0xLjVjNC43LDAsOC41LDMuOCw4LjUsOC41UzExLjcsMTUuNSw3LDE1LjV6IE03LDAKCQkJCUMzLjEsMCwwLDMuMSwwLDdzMy4xLDcsNyw3YzMuOSwwLDctMy4xLDctN1MxMC45LDAsNywweiIvPgoJCTwvZz4KCTwvZz4KCTxnIGlkPSJxdWVzdGlvbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4yNiAyLjgxOSkiPgoJCTxnIGlkPSJQYXRoXzMwNzY4Ij4KCQkJPHBhdGggY2xhc3M9InN0MSIgZD0iTTcuMiw2LjljMC0wLjUsMC0xLDAuMi0xLjRjMC4yLTAuMywwLjUtMC42LDAuOC0wLjlDOSw0LjEsOS4zLDMuOCw5LjMsMy4xYzAtMC43LTAuNS0xLTEuMi0xCgkJCQljLTAuNywwLTEuMywwLjItMS45LDAuNWwtMC41LTFDNi41LDEuMiw3LjMsMSw4LjIsMUM4LjgsMSw5LjQsMS4yLDEwLDEuNWMwLjQsMC40LDAuNywwLjksMC43LDEuNWMwLDAuNS0wLjIsMS0wLjUsMS40CgkJCQlDOS44LDQuNyw5LjUsNSw5LjIsNS4yQzksNS40LDguNyw1LjcsOC41LDUuOWMtMC4yLDAuMy0wLjIsMC43LTAuMiwxQzguMyw2LjksNy4yLDYuOSw3LjIsNi45eiIvPgoJCTwvZz4KCQk8ZyBpZD0iRWxsaXBzZV8xODI3Ij4KCQkJPGNpcmNsZSBjbGFzcz0ic3QxIiBjeD0iNy44IiBjeT0iOC44IiByPSIwLjgiLz4KCQk8L2c+Cgk8L2c+CjwvZz4KPC9zdmc+Cg=="
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          class="toggleButton pointer isButtonOnOff ml-auto align-self-center"
                        >
                          <div class="status no"></div>
                        </div>
                      </div>
                      <div class="green vueSlider" style="display: none">
                        <div data-v-494d0791="" class="inputNumber inputNumber">
                          <div
                            data-v-494d0791=""
                            class="control d-flex justify-content-between align-items-center"
                          >
                            <button
                              data-v-494d0791=""
                              type="button"
                              class="btn mr-1 d-flex align-items-center justify-content-center"
                            >
                              <svg
                                data-v-494d0791=""
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="2"
                                viewBox="0 0 14 2"
                                class="iconAction"
                              >
                                <g
                                  data-v-494d0791=""
                                  id="search-zoom-in"
                                  transform="translate(-7.991 -13.991)"
                                >
                                  <line
                                    data-v-494d0791=""
                                    id="Line_1142"
                                    data-name="Line 1142"
                                    x1="12"
                                    transform="translate(8.991 14.991)"
                                    fill="none"
                                    stroke="#fff"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-miterlimit="10"
                                    stroke-width="2"
                                  ></line>
                                </g>
                              </svg>
                            </button>
                            <div
                              data-v-494d0791=""
                              class="inputControl d-flex flex-column"
                            >
                              <div data-v-494d0791="">
                                <div
                                  data-v-494d0791=""
                                  class="position-relative input-wrapper"
                                >
                                  <input
                                    data-v-494d0791=""
                                    type="number"
                                    placeholder="5% - 100%"
                                    class="form-control input"
                                    style="width: 110px"
                                  />
                                  <!---->
                                  <span data-v-494d0791="" class="btnClear"
                                    ><img
                                      data-v-494d0791=""
                                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMSIgaGVpZ2h0PSIyMSIgdmlld0JveD0iMCAwIDIxIDIxIj4KICA8ZyBpZD0iR3JvdXBfMTExMzQiIGRhdGEtbmFtZT0iR3JvdXAgMTExMzQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjY4LjM0NSAtMjguMzQ1KSI+CiAgICA8Y2lyY2xlIGlkPSJFbGxpcHNlXzIwMSIgZGF0YS1uYW1lPSJFbGxpcHNlIDIwMSIgY3g9IjEwLjUiIGN5PSIxMC41IiByPSIxMC41IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjY4LjM0NSAyOC4zNDUpIiBmaWxsPSIjZmZmIiBvcGFjaXR5PSIwLjE5Ii8+CiAgICA8ZyBpZD0iZS1yZW1vdmUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyNzQuNjI0IDM0LjYyNCkiPgogICAgICA8cGF0aCBpZD0iUGF0aF8xMzc4NCIgZGF0YS1uYW1lPSJQYXRoIDEzNzg0IiBkPSJNOS4wNDcsMS4xNzZhLjU2OC41NjgsMCwwLDAtLjgyMiwwTDUuMTExLDQuMjg5LDIsMS4xNzZhLjU2OC41NjgsMCwwLDAtLjgyMiwwLC41NjguNTY4LDAsMCwwLDAsLjgyMkw0LjI4OSw1LjExMSwxLjE3Niw4LjIyNGEuNTY4LjU2OCwwLDAsMCwwLC44MjIuNTMzLjUzMywwLDAsMCwuNDExLjE3NkEuNTMzLjUzMywwLDAsMCwyLDkuMDQ3TDUuMTExLDUuOTM0LDguMjI0LDkuMDQ3YS41NjguNTY4LDAsMCwwLC44MjIsMCwuNTY4LjU2OCwwLDAsMCwwLS44MjJMNS45MzQsNS4xMTEsOS4wNDcsMkEuNTY4LjU2OCwwLDAsMCw5LjA0NywxLjE3NloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xIC0xKSIgZmlsbD0iI2ZmZiIvPgogICAgPC9nPgogIDwvZz4KPC9zdmc+Cg=="
                                  /></span>
                                </div>
                              </div>
                            </div>
                            <button
                              data-v-494d0791=""
                              type="button"
                              class="btn ml-1 d-flex align-items-center justify-content-center"
                            >
                              <svg
                                data-v-494d0791=""
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="14"
                                viewBox="0 0 14 14"
                                class="iconAction"
                              >
                                <g
                                  data-v-494d0791=""
                                  id="search-zoom-in"
                                  transform="translate(-7.991 -7.991)"
                                >
                                  <line
                                    data-v-494d0791=""
                                    id="Line_1141"
                                    data-name="Line 1141"
                                    y2="12"
                                    transform="translate(14.991 8.991)"
                                    fill="none"
                                    stroke="#fff"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-miterlimit="10"
                                    stroke-width="2"
                                  ></line>
                                  <line
                                    data-v-494d0791=""
                                    id="Line_1142"
                                    data-name="Line 1142"
                                    x1="12"
                                    transform="translate(8.991 14.991)"
                                    fill="none"
                                    stroke="#fff"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-miterlimit="10"
                                    stroke-width="2"
                                  ></line>
                                </g>
                              </svg>
                            </button>
                          </div>
                        </div>
                        <div class="wrap-vue-slider">
                          <!---->
                        </div>
                      </div>
                    </div>
                    <div class="divider"></div>
                    <div class="red userControl mb-2 mb-lg-0">
                      <div class="d-flex">
                        <p class="titleControl align-self-center mb-0">
                          Giá trị dừng lỗ
                        </p>
                        <div class="v-popover ml-3 vPopover">
                          <div
                            aria-describedby="popover_fcgljzlodu"
                            class="trigger"
                            style="display: inline-block"
                          >
                            <div class="btnTooltip">
                              <img
                                src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxNyAxNyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTcgMTc7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDpub25lO30KCS5zdDF7ZmlsbDojRkFDQzAwO30KPC9zdHlsZT4KPGcgaWQ9ImMtcXVlc3Rpb24iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMzk2IDAuMzk2KSI+Cgk8ZyBpZD0iRWxsaXBzZV8xODI1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxLjEwNCAxLjEwNCkiPgoJCTxnPgoJCQk8Y2lyY2xlIGNsYXNzPSJzdDAiIGN4PSI3IiBjeT0iNyIgcj0iNyIvPgoJCTwvZz4KCQk8Zz4KCQkJPHBhdGggY2xhc3M9InN0MSIgZD0iTTcsMTUuNWMtNC43LDAtOC41LTMuOC04LjUtOC41UzIuMy0xLjUsNy0xLjVjNC43LDAsOC41LDMuOCw4LjUsOC41UzExLjcsMTUuNSw3LDE1LjV6IE03LDAKCQkJCUMzLjEsMCwwLDMuMSwwLDdzMy4xLDcsNyw3YzMuOSwwLDctMy4xLDctN1MxMC45LDAsNywweiIvPgoJCTwvZz4KCTwvZz4KCTxnIGlkPSJxdWVzdGlvbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4yNiAyLjgxOSkiPgoJCTxnIGlkPSJQYXRoXzMwNzY4Ij4KCQkJPHBhdGggY2xhc3M9InN0MSIgZD0iTTcuMiw2LjljMC0wLjUsMC0xLDAuMi0xLjRjMC4yLTAuMywwLjUtMC42LDAuOC0wLjlDOSw0LjEsOS4zLDMuOCw5LjMsMy4xYzAtMC43LTAuNS0xLTEuMi0xCgkJCQljLTAuNywwLTEuMywwLjItMS45LDAuNWwtMC41LTFDNi41LDEuMiw3LjMsMSw4LjIsMUM4LjgsMSw5LjQsMS4yLDEwLDEuNWMwLjQsMC40LDAuNywwLjksMC43LDEuNWMwLDAuNS0wLjIsMS0wLjUsMS40CgkJCQlDOS44LDQuNyw5LjUsNSw5LjIsNS4yQzksNS40LDguNyw1LjcsOC41LDUuOWMtMC4yLDAuMy0wLjIsMC43LTAuMiwxQzguMyw2LjksNy4yLDYuOSw3LjIsNi45eiIvPgoJCTwvZz4KCQk8ZyBpZD0iRWxsaXBzZV8xODI3Ij4KCQkJPGNpcmNsZSBjbGFzcz0ic3QxIiBjeD0iNy44IiBjeT0iOC44IiByPSIwLjgiLz4KCQk8L2c+Cgk8L2c+CjwvZz4KPC9zdmc+Cg=="
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          class="toggleButton pointer isButtonOnOff ml-auto align-self-center"
                        >
                          <div class="status no"></div>
                        </div>
                      </div>
                      <div class="green vueSlider" style="display: none">
                        <div data-v-494d0791="" class="inputNumber inputNumber">
                          <div
                            data-v-494d0791=""
                            class="control d-flex justify-content-between align-items-center"
                          >
                            <button
                              data-v-494d0791=""
                              type="button"
                              class="btn mr-1 d-flex align-items-center justify-content-center"
                            >
                              <svg
                                data-v-494d0791=""
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="2"
                                viewBox="0 0 14 2"
                                class="iconAction"
                              >
                                <g
                                  data-v-494d0791=""
                                  id="search-zoom-in"
                                  transform="translate(-7.991 -13.991)"
                                >
                                  <line
                                    data-v-494d0791=""
                                    id="Line_1142"
                                    data-name="Line 1142"
                                    x1="12"
                                    transform="translate(8.991 14.991)"
                                    fill="none"
                                    stroke="#fff"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-miterlimit="10"
                                    stroke-width="2"
                                  ></line>
                                </g>
                              </svg>
                            </button>
                            <div
                              data-v-494d0791=""
                              class="inputControl d-flex flex-column"
                            >
                              <div data-v-494d0791="">
                                <div
                                  data-v-494d0791=""
                                  class="position-relative input-wrapper"
                                >
                                  <input
                                    data-v-494d0791=""
                                    type="number"
                                    placeholder="5% - 95%"
                                    class="form-control input"
                                    style="width: 100px"
                                  />
                                  <!---->
                                  <span data-v-494d0791="" class="btnClear"
                                    ><img
                                      data-v-494d0791=""
                                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMSIgaGVpZ2h0PSIyMSIgdmlld0JveD0iMCAwIDIxIDIxIj4KICA8ZyBpZD0iR3JvdXBfMTExMzQiIGRhdGEtbmFtZT0iR3JvdXAgMTExMzQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjY4LjM0NSAtMjguMzQ1KSI+CiAgICA8Y2lyY2xlIGlkPSJFbGxpcHNlXzIwMSIgZGF0YS1uYW1lPSJFbGxpcHNlIDIwMSIgY3g9IjEwLjUiIGN5PSIxMC41IiByPSIxMC41IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjY4LjM0NSAyOC4zNDUpIiBmaWxsPSIjZmZmIiBvcGFjaXR5PSIwLjE5Ii8+CiAgICA8ZyBpZD0iZS1yZW1vdmUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyNzQuNjI0IDM0LjYyNCkiPgogICAgICA8cGF0aCBpZD0iUGF0aF8xMzc4NCIgZGF0YS1uYW1lPSJQYXRoIDEzNzg0IiBkPSJNOS4wNDcsMS4xNzZhLjU2OC41NjgsMCwwLDAtLjgyMiwwTDUuMTExLDQuMjg5LDIsMS4xNzZhLjU2OC41NjgsMCwwLDAtLjgyMiwwLC41NjguNTY4LDAsMCwwLDAsLjgyMkw0LjI4OSw1LjExMSwxLjE3Niw4LjIyNGEuNTY4LjU2OCwwLDAsMCwwLC44MjIuNTMzLjUzMywwLDAsMCwuNDExLjE3NkEuNTMzLjUzMywwLDAsMCwyLDkuMDQ3TDUuMTExLDUuOTM0LDguMjI0LDkuMDQ3YS41NjguNTY4LDAsMCwwLC44MjIsMCwuNTY4LjU2OCwwLDAsMCwwLS44MjJMNS45MzQsNS4xMTEsOS4wNDcsMkEuNTY4LjU2OCwwLDAsMCw5LjA0NywxLjE3NloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xIC0xKSIgZmlsbD0iI2ZmZiIvPgogICAgPC9nPgogIDwvZz4KPC9zdmc+Cg=="
                                  /></span>
                                </div>
                              </div>
                            </div>
                            <button
                              data-v-494d0791=""
                              type="button"
                              class="btn ml-1 d-flex align-items-center justify-content-center"
                            >
                              <svg
                                data-v-494d0791=""
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="14"
                                viewBox="0 0 14 14"
                                class="iconAction"
                              >
                                <g
                                  data-v-494d0791=""
                                  id="search-zoom-in"
                                  transform="translate(-7.991 -7.991)"
                                >
                                  <line
                                    data-v-494d0791=""
                                    id="Line_1141"
                                    data-name="Line 1141"
                                    y2="12"
                                    transform="translate(14.991 8.991)"
                                    fill="none"
                                    stroke="#fff"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-miterlimit="10"
                                    stroke-width="2"
                                  ></line>
                                  <line
                                    data-v-494d0791=""
                                    id="Line_1142"
                                    data-name="Line 1142"
                                    x1="12"
                                    transform="translate(8.991 14.991)"
                                    fill="none"
                                    stroke="#fff"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-miterlimit="10"
                                    stroke-width="2"
                                  ></line>
                                </g>
                              </svg>
                            </button>
                          </div>
                        </div>
                        <div class="wrap-vue-slider">
                          <!---->
                        </div>
                      </div>
                    </div>
                    <div class="divider mt-lg-0"></div>
                    <div class="blue userControl mb-2 mb-lg-0">
                      <div class="d-flex">
                        <p class="titleControl align-self-center mb-0">
                          Chốt lời
                        </p>
                        <div class="v-popover ml-3 vPopover">
                          <div
                            aria-describedby="popover_0typ48tngi"
                            class="trigger"
                            style="display: inline-block"
                          >
                            <div class="btnTooltip">
                              <img
                                src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxNyAxNyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTcgMTc7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDpub25lO30KCS5zdDF7ZmlsbDojRkFDQzAwO30KPC9zdHlsZT4KPGcgaWQ9ImMtcXVlc3Rpb24iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMzk2IDAuMzk2KSI+Cgk8ZyBpZD0iRWxsaXBzZV8xODI1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxLjEwNCAxLjEwNCkiPgoJCTxnPgoJCQk8Y2lyY2xlIGNsYXNzPSJzdDAiIGN4PSI3IiBjeT0iNyIgcj0iNyIvPgoJCTwvZz4KCQk8Zz4KCQkJPHBhdGggY2xhc3M9InN0MSIgZD0iTTcsMTUuNWMtNC43LDAtOC41LTMuOC04LjUtOC41UzIuMy0xLjUsNy0xLjVjNC43LDAsOC41LDMuOCw4LjUsOC41UzExLjcsMTUuNSw3LDE1LjV6IE03LDAKCQkJCUMzLjEsMCwwLDMuMSwwLDdzMy4xLDcsNyw3YzMuOSwwLDctMy4xLDctN1MxMC45LDAsNywweiIvPgoJCTwvZz4KCTwvZz4KCTxnIGlkPSJxdWVzdGlvbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4yNiAyLjgxOSkiPgoJCTxnIGlkPSJQYXRoXzMwNzY4Ij4KCQkJPHBhdGggY2xhc3M9InN0MSIgZD0iTTcuMiw2LjljMC0wLjUsMC0xLDAuMi0xLjRjMC4yLTAuMywwLjUtMC42LDAuOC0wLjlDOSw0LjEsOS4zLDMuOCw5LjMsMy4xYzAtMC43LTAuNS0xLTEuMi0xCgkJCQljLTAuNywwLTEuMywwLjItMS45LDAuNWwtMC41LTFDNi41LDEuMiw3LjMsMSw4LjIsMUM4LjgsMSw5LjQsMS4yLDEwLDEuNWMwLjQsMC40LDAuNywwLjksMC43LDEuNWMwLDAuNS0wLjIsMS0wLjUsMS40CgkJCQlDOS44LDQuNyw5LjUsNSw5LjIsNS4yQzksNS40LDguNyw1LjcsOC41LDUuOWMtMC4yLDAuMy0wLjIsMC43LTAuMiwxQzguMyw2LjksNy4yLDYuOSw3LjIsNi45eiIvPgoJCTwvZz4KCQk8ZyBpZD0iRWxsaXBzZV8xODI3Ij4KCQkJPGNpcmNsZSBjbGFzcz0ic3QxIiBjeD0iNy44IiBjeT0iOC44IiByPSIwLjgiLz4KCQk8L2c+Cgk8L2c+CjwvZz4KPC9zdmc+Cg=="
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          class="toggleButton pointer isButtonOnOff ml-auto align-self-center"
                        >
                          <div class="status no"></div>
                        </div>
                      </div>
                      <div class="green vueSlider" style="display: none">
                        <div data-v-494d0791="" class="inputNumber inputNumber">
                          <div
                            data-v-494d0791=""
                            class="control d-flex justify-content-between align-items-center"
                          >
                            <button
                              data-v-494d0791=""
                              type="button"
                              class="btn mr-1 d-flex align-items-center justify-content-center"
                            >
                              <svg
                                data-v-494d0791=""
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="2"
                                viewBox="0 0 14 2"
                                class="iconAction"
                              >
                                <g
                                  data-v-494d0791=""
                                  id="search-zoom-in"
                                  transform="translate(-7.991 -13.991)"
                                >
                                  <line
                                    data-v-494d0791=""
                                    id="Line_1142"
                                    data-name="Line 1142"
                                    x1="12"
                                    transform="translate(8.991 14.991)"
                                    fill="none"
                                    stroke="#fff"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-miterlimit="10"
                                    stroke-width="2"
                                  ></line>
                                </g>
                              </svg>
                            </button>
                            <div
                              data-v-494d0791=""
                              class="inputControl d-flex flex-column"
                            >
                              <div data-v-494d0791="">
                                <div
                                  data-v-494d0791=""
                                  class="position-relative input-wrapper"
                                >
                                  <input
                                    data-v-494d0791=""
                                    type="number"
                                    placeholder="105% - 1000%"
                                    class="form-control input"
                                    style="width: 140px"
                                  />
                                  <!---->
                                  <span data-v-494d0791="" class="btnClear"
                                    ><img
                                      data-v-494d0791=""
                                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMSIgaGVpZ2h0PSIyMSIgdmlld0JveD0iMCAwIDIxIDIxIj4KICA8ZyBpZD0iR3JvdXBfMTExMzQiIGRhdGEtbmFtZT0iR3JvdXAgMTExMzQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjY4LjM0NSAtMjguMzQ1KSI+CiAgICA8Y2lyY2xlIGlkPSJFbGxpcHNlXzIwMSIgZGF0YS1uYW1lPSJFbGxpcHNlIDIwMSIgY3g9IjEwLjUiIGN5PSIxMC41IiByPSIxMC41IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjY4LjM0NSAyOC4zNDUpIiBmaWxsPSIjZmZmIiBvcGFjaXR5PSIwLjE5Ii8+CiAgICA8ZyBpZD0iZS1yZW1vdmUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyNzQuNjI0IDM0LjYyNCkiPgogICAgICA8cGF0aCBpZD0iUGF0aF8xMzc4NCIgZGF0YS1uYW1lPSJQYXRoIDEzNzg0IiBkPSJNOS4wNDcsMS4xNzZhLjU2OC41NjgsMCwwLDAtLjgyMiwwTDUuMTExLDQuMjg5LDIsMS4xNzZhLjU2OC41NjgsMCwwLDAtLjgyMiwwLC41NjguNTY4LDAsMCwwLDAsLjgyMkw0LjI4OSw1LjExMSwxLjE3Niw4LjIyNGEuNTY4LjU2OCwwLDAsMCwwLC44MjIuNTMzLjUzMywwLDAsMCwuNDExLjE3NkEuNTMzLjUzMywwLDAsMCwyLDkuMDQ3TDUuMTExLDUuOTM0LDguMjI0LDkuMDQ3YS41NjguNTY4LDAsMCwwLC44MjIsMCwuNTY4LjU2OCwwLDAsMCwwLS44MjJMNS45MzQsNS4xMTEsOS4wNDcsMkEuNTY4LjU2OCwwLDAsMCw5LjA0NywxLjE3NloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xIC0xKSIgZmlsbD0iI2ZmZiIvPgogICAgPC9nPgogIDwvZz4KPC9zdmc+Cg=="
                                  /></span>
                                </div>
                              </div>
                            </div>
                            <button
                              data-v-494d0791=""
                              type="button"
                              class="btn ml-1 d-flex align-items-center justify-content-center"
                            >
                              <svg
                                data-v-494d0791=""
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="14"
                                viewBox="0 0 14 14"
                                class="iconAction"
                              >
                                <g
                                  data-v-494d0791=""
                                  id="search-zoom-in"
                                  transform="translate(-7.991 -7.991)"
                                >
                                  <line
                                    data-v-494d0791=""
                                    id="Line_1141"
                                    data-name="Line 1141"
                                    y2="12"
                                    transform="translate(14.991 8.991)"
                                    fill="none"
                                    stroke="#fff"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-miterlimit="10"
                                    stroke-width="2"
                                  ></line>
                                  <line
                                    data-v-494d0791=""
                                    id="Line_1142"
                                    data-name="Line 1142"
                                    x1="12"
                                    transform="translate(8.991 14.991)"
                                    fill="none"
                                    stroke="#fff"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-miterlimit="10"
                                    stroke-width="2"
                                  ></line>
                                </g>
                              </svg>
                            </button>
                          </div>
                        </div>
                        <div class="wrap-vue-slider">
                          <!---->
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mt-auto divBottom pt-lg-3">
                    <p class="mb-0">
                      <label class="boxCheckbox">
                        Tôi xác nhận và đồng ý
                        <a
                          href="/faqs/wefinex-copy-trading-service"
                          target="_blank"
                          class="agreement"
                          >Điều khoản dịch vụ</a
                        >
                        <input type="checkbox" checked="checked" />
                        <span class="checkmark"></span
                      ></label>
                    </p>
                    <button
                      disabled="disabled"
                      class="btnStart btn w-100 disabled"
                    >
                      <span class="ml-1 align-middle">Bắt đầu sao chép</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            data-v-7785b08f=""
            class="keyboard-input-wrap"
            style="display: none"
          >
            <div data-v-7785b08f="" class="numKeyboardInput">
              <div
                data-v-d9354e24=""
                data-v-7785b08f=""
                class="keyboard hidden"
              >
                <div
                  data-v-d9354e24=""
                  id="amountWrapper"
                  class="amountWrapper"
                >
                  <div data-v-d9354e24="" class="headerAmount">
                    <span data-v-d9354e24="">Lượng đầu tư</span>
                  </div>
                  <!---->
                </div>
                <table data-v-d9354e24="" id="keyboardLandscape">
                  <tbody data-v-d9354e24="">
                    <tr data-v-d9354e24="">
                      <td data-v-d9354e24="">1</td>
                      <td data-v-d9354e24="">2</td>
                      <td data-v-d9354e24="">3</td>
                      <td data-v-d9354e24="" data-code="ALL" rowspan="2">
                        <span data-v-d9354e24="">Tất cả</span>
                      </td>
                    </tr>
                    <tr data-v-d9354e24="">
                      <td data-v-d9354e24="">4</td>
                      <td data-v-d9354e24="">5</td>
                      <td data-v-d9354e24="">6</td>
                    </tr>
                    <tr data-v-d9354e24="">
                      <td data-v-d9354e24="">7</td>
                      <td data-v-d9354e24="">8</td>
                      <td data-v-d9354e24="">9</td>
                      <td data-v-d9354e24="" data-code="K" rowspan="2" class="">
                        Hoàn tất
                      </td>
                    </tr>
                    <tr data-v-d9354e24="">
                      <td data-v-d9354e24="">.</td>
                      <td data-v-d9354e24="">0</td>
                      <td data-v-d9354e24="" data-code="D">
                        <span data-v-d9354e24="" class="icon del"></span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            tabindex="-1"
            role="dialog"
            aria-hidden="true"
            class="modal fade modal-info popupOrderReceipt"
          >
            <div role="document" class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <div
                    class="d-flex d-lg-block justify-content-between algin-items-center w-100 text-lg-center"
                  >
                    <label class="titleHeader">Tóm tắt</label>
                    <div class="btnClose">
                      <img
                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMSIgaGVpZ2h0PSIyMSIgdmlld0JveD0iMCAwIDIxIDIxIj4KICA8ZyBpZD0iR3JvdXBfMTExMzQiIGRhdGEtbmFtZT0iR3JvdXAgMTExMzQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjY4LjM0NSAtMjguMzQ1KSI+CiAgICA8Y2lyY2xlIGlkPSJFbGxpcHNlXzIwMSIgZGF0YS1uYW1lPSJFbGxpcHNlIDIwMSIgY3g9IjEwLjUiIGN5PSIxMC41IiByPSIxMC41IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjY4LjM0NSAyOC4zNDUpIiBmaWxsPSIjZmZmIiBvcGFjaXR5PSIwLjE5Ii8+CiAgICA8ZyBpZD0iZS1yZW1vdmUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyNzQuNjI0IDM0LjYyNCkiPgogICAgICA8cGF0aCBpZD0iUGF0aF8xMzc4NCIgZGF0YS1uYW1lPSJQYXRoIDEzNzg0IiBkPSJNOS4wNDcsMS4xNzZhLjU2OC41NjgsMCwwLDAtLjgyMiwwTDUuMTExLDQuMjg5LDIsMS4xNzZhLjU2OC41NjgsMCwwLDAtLjgyMiwwLC41NjguNTY4LDAsMCwwLDAsLjgyMkw0LjI4OSw1LjExMSwxLjE3Niw4LjIyNGEuNTY4LjU2OCwwLDAsMCwwLC44MjIuNTMzLjUzMywwLDAsMCwuNDExLjE3NkEuNTMzLjUzMywwLDAsMCwyLDkuMDQ3TDUuMTExLDUuOTM0LDguMjI0LDkuMDQ3YS41NjguNTY4LDAsMCwwLC44MjIsMCwuNTY4LjU2OCwwLDAsMCwwLS44MjJMNS45MzQsNS4xMTEsOS4wNDcsMkEuNTY4LjU2OCwwLDAsMCw5LjA0NywxLjE3NloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xIC0xKSIgZmlsbD0iI2ZmZiIvPgogICAgPC9nPgogIDwvZz4KPC9zdmc+Cg=="
                      />
                    </div>
                    <button
                      type="button"
                      aria-label="Close"
                      class="closeBtnHeader ml-auto"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                      >
                        <g
                          stroke-linecap="square"
                          stroke-linejoin="miter"
                          stroke-width="2"
                          fill="currentColor"
                          stroke="currentColor"
                          class="nc-icon-wrapper"
                        >
                          <g class="nc-interact_menu-close-2-o-32">
                            <path
                              fill="currentColor"
                              stroke="currentColor"
                              stroke-miterlimit="10"
                              d="M2 6h28"
                              transform="translate(0 10.00) rotate(45.00 16 6)"
                            ></path>
                            <path
                              data-color="color-2"
                              fill="currentColor"
                              stroke-miterlimit="10"
                              d="M2 16h28"
                              opacity="0"
                            ></path>
                            <path
                              fill="currentColor"
                              stroke="currentColor"
                              stroke-miterlimit="10"
                              d="M2 26h28"
                              transform="translate(0 -10) rotate(-45 16 26)"
                            ></path>
                          </g>
                        </g>
                      </svg>
                    </button>
                  </div>
                </div>
                <div class="modal-body">
                  <div class="headerBox d-flex">
                    <div
                      class="profile d-flex align-items-center justify-content-center w-100"
                    >
                      <p class="name text-center">
                        Xin chúc mừng! Bạn đã sao chép thành công
                      </p>
                    </div>
                  </div>
                  <div
                    class="content d-flex flex-column justify-content-between d-lg-block"
                  >
                    <div class="contentBox">
                      <div class="d-flex justify-content-between">
                        <label class="name">Chuyên gia giao dịch</label>
                        <p class="value mb-0"></p>
                      </div>
                      <div class="divider"></div>
                      <div class="d-flex justify-content-between">
                        <label class="name">Lượng đầu tư</label>
                        <p class="value mb-0">$</p>
                      </div>
                      <div class="divider"></div>
                      <div class="d-flex justify-content-between">
                        <label class="name">Tối thiểu</label>
                        <p class="value mb-0">-</p>
                      </div>
                      <div class="divider"></div>
                      <div class="d-flex justify-content-between">
                        <label class="name">Tối đa</label>
                        <p class="value mb-0">-</p>
                      </div>
                      <div class="divider"></div>
                      <div class="d-flex justify-content-between">
                        <label class="name">Cắt lỗ</label>
                        <p class="value mb-0">-</p>
                      </div>
                      <div class="divider"></div>
                      <div class="d-flex justify-content-between">
                        <label class="name">Chốt lời</label>
                        <p class="value mb-0">-</p>
                      </div>
                    </div>
                    <button class="btn">Xác nhận</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            tabindex="-1"
            role="dialog"
            aria-hidden="true"
            class="modal fade modal-info modalTransfer"
          >
            <div class="modal-dialog">
              <div class="modal-content-info h-100">
                <button type="button" aria-label="Close" class="close">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                    <g
                      stroke-linecap="square"
                      stroke-linejoin="miter"
                      stroke-width="2"
                      fill="currentColor"
                      stroke="currentColor"
                      class="nc-icon-wrapper"
                    >
                      <g class="nc-interact_menu-close-2-o-32">
                        <path
                          fill="currentColor"
                          stroke="currentColor"
                          stroke-miterlimit="10"
                          d="M2 6h28"
                          transform="translate(0 10.00) rotate(45.00 16 6)"
                        ></path>
                        <path
                          data-color="color-2"
                          fill="currentColor"
                          stroke-miterlimit="10"
                          d="M2 16h28"
                          opacity="0"
                        ></path>
                        <path
                          fill="currentColor"
                          stroke="currentColor"
                          stroke-miterlimit="10"
                          d="M2 26h28"
                          transform="translate(0 -10) rotate(-45 16 26)"
                        ></path>
                      </g>
                    </g>
                  </svg>
                </button>
                <div>
                  <div class="headerDesktop">
                    <label>Số dư tài khoản Live không đủ</label>
                  </div>
                  <div class="modal-body-popup text-center">
                    <div class="header d-flex">
                      <div
                        class="leftHeader d-flex flex-column align-items-center"
                      >
                        <span class="font-14 mb-2"
                          ><span class="color-blue text-uppercase">Win</span>
                          <span>Wallet</span></span
                        >
                        <span class="font-26 font-weight-700">0</span>
                      </div>
                      <div
                        class="rightHeader d-flex flex-column align-items-center"
                      >
                        <span class="font-14 mb-2">Tài khoản Thực</span>
                        <span class="font-26 font-weight-700">0</span>
                      </div>
                      <div href="#" class="changeAmount pointer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
                          viewBox="0 0 30 30"
                          class="iconTransfer"
                        >
                          <g
                            id="Group_10897"
                            data-name="Group 10897"
                            transform="translate(-559.431 -202.553)"
                          >
                            <g
                              id="Group_4613"
                              data-name="Group 4613"
                              transform="translate(559.431 202.553)"
                            >
                              <g
                                id="Rectangle_2919"
                                data-name="Rectangle 2919"
                                transform="translate(0)"
                                fill="#e9f0fa"
                                stroke="#e5e5e5"
                                stroke-width="1"
                              >
                                <rect
                                  width="30"
                                  height="30"
                                  rx="15"
                                  stroke="none"
                                ></rect>
                                <rect
                                  x="0.5"
                                  y="0.5"
                                  width="29"
                                  height="29"
                                  rx="14.5"
                                  fill="none"
                                ></rect>
                              </g>
                            </g>
                            <g
                              id="conversion"
                              transform="translate(567.976 210.905)"
                            >
                              <path
                                id="Path_13963"
                                data-name="Path 13963"
                                d="M13.474,6.51H1V5.376H12.1l-3.4-3.4.8-.8,4.37,4.37a.567.567,0,0,1-.4.968Z"
                                transform="translate(-1 -1.172)"
                                fill="#031219"
                              ></path>
                              <path
                                id="Path_13964"
                                data-name="Path 13964"
                                d="M5.536,33.338l-4.37-4.37a.567.567,0,0,1,.4-.968H14.041v1.134H2.936l3.4,3.4Z"
                                transform="translate(-1 -20.395)"
                                fill="#031219"
                              ></path>
                            </g>
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div class="content d-flex flex-column align-items-center">
                      <div class="contentNote">
                        <div class="text d-flex align-items-center">
                          <img
                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8ZyBpZD0iZGlzY291bnQtY2FsY3VsYXRvciIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuMTcgLTAuMTcpIj4KICAgIDxjaXJjbGUgaWQ9IkVsbGlwc2VfMTkxNiIgZGF0YS1uYW1lPSJFbGxpcHNlIDE5MTYiIGN4PSI4IiBjeT0iOCIgcj0iOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4xNyAwLjE3KSIgZmlsbD0iIzg3ODA5OCIvPgogICAgPHBhdGggaWQ9IlBhdGhfMzQ4MjYiIGRhdGEtbmFtZT0iUGF0aCAzNDgyNiIgZD0iTTUuNTQyLDEwLjA4NUEyLjA0MiwyLjA0MiwwLDEsMSw3LjU4NSw4LjA0MiwyLjA0MiwyLjA0MiwwLDAsMSw1LjU0MiwxMC4wODVabTAtMi43MjNhLjY4MS42ODEsMCwxLDAsLjY4MS42ODFBLjY4MS42ODEsMCwwLDAsNS41NDIsNy4zNjJaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxLjI2NiAtMy4yNzcpIiBmaWxsPSIjZTlmMGZhIiBvcGFjaXR5PSIwLjQ0MSIvPgogICAgPHBhdGggaWQ9IlBhdGhfMzQ4MjciIGRhdGEtbmFtZT0iUGF0aCAzNDgyNyIgZD0iTTcuNTQyLDE1LjA4NWEyLjA0MiwyLjA0MiwwLDEsMSwyLjA0Mi0yLjA0MkEyLjA0MiwyLjA0MiwwLDAsMSw3LjU0MiwxNS4wODVabTAtMi43MjNhLjY4MS42ODEsMCwxLDAsLjY4MS42ODFBLjY4MS42ODEsMCwwLDAsNy41NDIsMTIuMzYyWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMS45ODkgLTEuNDY4KSIgZmlsbD0iI2U5ZjBmYSIgb3BhY2l0eT0iMC40NDEiLz4KICAgIDxwYXRoIGlkPSJQYXRoXzM0ODI4IiBkYXRhLW5hbWU9IlBhdGggMzQ4MjgiIGQ9Ik00LjE4MSwxNS4xN2EuNjgxLjY4MSwwLDAsMS0uNTMxLTEuMTA2TDkuMSw3LjI1NmEuNjgxLjY4MSwwLDAsMSwxLjA2My44NTFMNC43MTMsMTQuOTE1QS42ODEuNjgxLDAsMCwxLDQuMTgxLDE1LjE3WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMS4yNjYgLTIuOTE1KSIgZmlsbD0iI2U5ZjBmYSIgb3BhY2l0eT0iMC40NDEiLz4KICA8L2c+Cjwvc3ZnPgo="
                          /><label class="mb-0"
                            >Miễn phí chuyển giữa các tài khoản.</label
                          >
                        </div>
                      </div>
                      <div class="labelTransfer">Số lượng chuyển</div>
                      <div class="inputGroup mb-3 w-75">
                        <input
                          type="number"
                          placeholder="Khoản tối thiểu: $0"
                          aria-label="Recipient's username"
                          aria-describedby="button-addon2"
                          class="form-control w-100"
                        />
                        <div class="input-append">
                          <button type="button" id="button-addon2" class="btn">
                            Tất cả
                          </button>
                        </div>
                      </div>
                      <button
                        class="button btn-border-radius btn-large wbtn w-75 font-weight-bold"
                      >
                        Chuyển Tiền
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="scrollPage">
          <button clas="btn" id="btnScroll" style="display: none">
            <i class="fa fa-angle-up fa-2x"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
* {
  box-sizing: inherit;
  font-family: "Roboto", sans-serif;
}
@text-color: #ffffff;
@background-color: #12013e;

.afterContent() {
  content: "";
  display: block;
  position: absolute;
  width: 100%;
}

#mainContent {
  width: calc(100% - 100px);
  background-color: @background-color;
  padding: 0px;
  display: block;
  float: right;
  .boxContent {
    .community {
      .backgroundDark {
        background-color: #170055;
        .menuHeaderLink {
          white-space: nowrap;
          padding: 0px;
          margin: 0px;
          .nav-item {
            background-color: transparent;
            a {
              position: relative;
              font-size: 18px;
              padding-left: 50px;
              padding-right: 50px;
              height: 51px;
              align-items: center;
              color: rgba(255, 255, 255, 0.5);
              padding: 0.75rem 1rem;
              border-radius: 0;
            }
            .router-link-active {
              font-size: 18px;
              padding-left: 50px;
              padding-right: 50px;
              height: 51px;
              color: @text-color;
              font-weight: bold;
              align-items: center;
              display: inline-block;
              background: transparent;
              &::after {
                .afterContent;
                height: 4px;
                background: #00b6ff;
                border-radius: 4px 4px 0 0;
                bottom: 0;
                left: 0;
              }
            }
          }
        }
      }
      .page {
        background-color: @background-color;
        .banner {
          position: relative;
          width: 100%;
          height: 509px;
          text-align: center;
          .backgroundBanner {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-image: url(../../assets/background_pc.fa409bf.png);
            background-repeat: no-repeat;
            background-size: cover;
            background-attachment: fixed;
            &::before {
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              content: "";
              background-color: #12023e;
              opacity: 0.6;
              z-index: 1;
            }
          }
          .title {
            position: absolute;
            top: 23%;
            left: -75px;
            right: 0;
            bottom: 0;
            text-align: center;
            color: #23d1b0;
            font-size: 65px;
            font-weight: bold;
            line-height: 1.3;
            z-index: 2;
            margin-bottom: 1rem;
            &::before {
              position: absolute;
              top: -10%;
              left: 50%;
              transform: translateX(-50%);
              width: 37.38px;
              height: 32.71px;
              content: "";
              background-image: url(../../assets/star.one.png);
              background-repeat: no-repeat;
              background-size: contain;
            }
          }
          .subText {
            position: absolute;
            top: 40%;
            left: -75px;
            right: 0;
            bottom: 0;
            text-align: center;
            color: #fff;
            font-size: 24px;
            line-height: 1.3;
            z-index: 2;
          }
        }
        .pageContent {
          position: relative;
          top: -200px;
          width: 100%;
          z-index: 99;
          .container {
            .row {
              .col-lg-4 {
                .control {
                  .controlBox {
                    display: flex;
                    flex-direction: column;
                    .controlText {
                      color: @text-color;
                      font-size: 15px;
                      line-height: 1.3;
                      margin-bottom: 14px;
                      text-align: start;
                    }
                    .d-flex {
                      .btnControl {
                        color: @text-color;
                        padding: 13px 0;
                        border-radius: 4px;
                        font-size: 16px;
                        flex: 1;
                        cursor: pointer;
                        text-align: center;
                        background-color: #5a6e8d;
                        transition: color 0.3s ease-in-out,
                          background-color 0.3s ease-in-out,
                          border-color 0.3s ease-in-out,
                          box-shadow 0.3s ease-in-out;
                        &:hover {
                          background-color: #f52f71;
                          border-color: #f52f71;
                          box-shadow: 2px 2px 4px #f52f71;
                        }
                      }
                      .btnControl:first-child {
                        margin-right: 12px;
                        background-color: #f52f71;
                      }
                    }
                  }
                }
              }
              .offset-lg-3 {
                .control {
                  height: 100%;
                  .search {
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    .searchText {
                      color: @text-color;
                      font-size: 14px;
                      line-height: 1.3;
                      margin-bottom: 13px;
                    }
                    .align-items-center {
                      height: 100%;
                      justify-content: space-between;
                      align-items: center;
                      .searchValue {
                        position: relative;
                        height: 45px;
                        flex: 1;
                        input {
                          height: 100%;
                          border: 1px solid #41416f;
                          border-top-left-radius: 4px;
                          border-bottom-left-radius: 4px;
                          border-right: none;
                          color: #fff;
                          width: 100%;
                          background-color: #12063a;
                        }
                      }
                      .btnSearch {
                        padding: 19px 25px 19px 25px;
                        color: #fff;
                        text-align: center;
                        font-size: 14px;
                        line-height: 1.3;
                        border-radius: 4px;
                        background-color: #0063ff;
                        transition: color 0.15s ease-in-out,
                          background-color 0.15s ease-in-out,
                          border-color 0.15s ease-in-out,
                          box-shadow 0.15s ease-in-out;
                        cursor: pointer;
                        z-index: 1;
                      }
                    }
                  }
                }
              }
            }
            .communityList {
              margin-top: 27px;
              .col-xl-4 {
                .communityItem {
                  .boxProfile {
                    margin-top: 0;
                    margin-bottom: 30px;
                    border-radius: 4px;
                    .headerBox {
                      padding: 10px 15px;
                      background-color: #35285b;
                      border-top-left-radius: 10px;
                      border-top-right-radius: 10px;
                      img {
                        height: 84px;
                        width: 84px;
                      }
                      .profile {
                        margin-left: 15px;
                        width: 100%;
                        align-self: center;
                        p {
                          color: #fff;
                          font-size: 20px;
                          font-weight: bold;
                        }
                        .d-flex {
                          .label {
                            background-color: #fea829;
                            color: #fff;
                            font-size: 11px;
                            font-weight: 600;
                            padding: 0px 6px;
                            border-radius: 3px;
                            .align-items-center {
                              img {
                                height: 12px;
                              }
                              span {
                                color: #fff;
                                font-size: 11px;
                                font-weight: 600;
                                padding: 0px 6px;
                                border-radius: 3px;
                              }
                            }
                          }
                        }
                      }
                    }
                    .numberContent {
                      padding: 21px 24px;
                      background-color: #261a46;
                      margin-bottom: 0.15rem;
                      .d-flex {
                        .flexBox {
                          flex: 1;
                          .title {
                            font-size: 10px;
                            line-height: 1.3;
                            color: #8086b1;
                            margin-bottom: 0;
                            text-transform: uppercase;
                            font-weight: normal;
                          }
                          .number {
                            font-size: 20px;
                            font-weight: bold;
                            margin-bottom: 5px;
                            color: #fff;
                          }
                          .green {
                            color: #31baa0;
                            font-size: 20px;
                            font-weight: bold;
                            margin-bottom: 5px;
                          }
                        }
                      }
                    }
                    .bodyBox {
                      padding: 18px;
                      background-color: #261a46;
                      .disabled {
                        width: calc(100% - 24px) !important;
                        cursor: no-drop;
                        img {
                          height: auto;
                          max-width: 100%;
                          font-style: italic;
                          vertical-align: middle;
                        }
                      }
                    }
                    .footerBox {
                      text-align: center;
                      color: #fff;
                      padding: 0 0 15px 0;
                      background-color: #261a46;
                      border-bottom-left-radius: 10px;
                      border-bottom-right-radius: 10px;
                      .mb-0 {
                        .mr-1 {
                          font-size: 14px;
                          line-height: 1.3;
                          color: #646591;
                        }
                        .number {
                          color: #fff;
                          font-weight: bold;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>