<template>  
<client-only>
	<div>
		<div id="sidebar" class="sidebar sidebar-grid" :class="`sidebar-left-${themeType}`" :style="'width:' + sidebarWidth" style="transition: all 0.5s ease-out 0s;" @mouseover="mouseOver" @mouseleave="mouseLeave">
			<!-- begin sidebar scrollbar -->
			<div class="slimScrollDiv" style="position: relative; overflow: hidden; width: auto; height: 100%;">
				<div v-show="(showLeftPanel && layoutType != 'layout2' && layoutType != 'layout5') || (layoutType == 'layout2' || layoutType == 'layout5')" 
					data-scrollbar="true" data-height="100%" class="pull-right bg-side-bg" 
					:class="layoutType == 'layout2' || layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6' ? 'width-full' : 'width-side'" id="sidebarinner" data-init="true" style="overflow: hidden; width: auto; height: 100%;">
					<el-scrollbar style="height: 100%">
						<div id="leftmenu" style="height: 100%;" :class="{'m-b-30': !isMobile}">
							<div class="animated fadeInLeftBig bettingbox height-full">
								<!-- begin panel -->
								<div class="panel panel-inverse p-0 m-0 overflow-hidden" :class="`sidebar-bg-${themeType}`">
									<!-- 서브메뉴 -->
									<div v-if="isMobile && layoutType == 'layout1'" class="bg-black1">
										<el-row>
											<img :src="`/image/Home/${themeType}/left-top.png`" width="100%">
											<img v-if="layoutType == 'layout1'" :src="`/image/Home/${themeType}/LeftLogo.png`" class="position-absolute cursor" :style="getLogStyle()" @click="goToPage(17)">
											<div class="position-absolute p-10 p-t-5 p-b-5 text-white f-s-20 f-w-700 cursor" style="background-color: rgba(0, 0, 0, 0.3); right: 20px; top: 20px; border-radius: 5px;" @click="onClickShowPanel()">X</div>
										</el-row>
									</div>
									<div v-if="themeType == 'orange11' || themeType == 'purple11' || themeType == 'red13' || themeType == 'blue12' || themeType == 'yellow19' || themeType == 'purple12' || themeType == 'blue16' || themeType == 'blue17' || themeType == 'orange14' || themeType == 'orange13' || themeType == 'gold11' || themeType == 'red15' || themeType == 'white' || themeType == 'red14' || themeType == 'yellow12' || themeType == 'red12' || themeType == 'blue15' || themeType == 'red11' || themeType == 'blue14'" class="panel-heading p-t-2 p-l-2 p-r-2 p-b-0" 
										:class="`sidebar-board-bg-${themeType}`">
										<!-- <table class="table table-bordered table-td-valign-middle m-0 p-0 cursor f-s-12">
											<tbody>
												<tr v-if="themeType != 'gold12'">
													<td width="33.3%" class="p-0 text-center height-42" :class="`sidebar-money-${themeType}`" @click="goToPage(12)"> <i class="fa fa-plus-square" :class="`sidebar-left-icon-${themeType}`"></i> 입금 </td>
													<td width="33.3%" class="p-0 text-center height-42" :class="`sidebar-money-${themeType}`" @click="goToPage(13)"> <i class="fa fa-minus-square" :class="`sidebar-left-icon-${themeType}`"></i> 출금 </td>
													<td width="33.3%" class="p-0 text-center height-42" :class="`sidebar-money-${themeType}`" @click="goToPage(8)"> <i class="fa fa-comments-o" :class="`sidebar-left-icon-${themeType}`"></i> 문의 </td>
												</tr>
												<tr v-if="themeType != 'gold12' && themeType != 'gold11' && themeType != 'red15' && themeType != 'red12' && themeType != 'blue15'" :class="{'bg-blue-grad': themeType == 'blue14'}">
													<td width="33.3%" class="p-0 text-center height-42" :class="`sidebar-board-${themeType}`" @click="goToPage('sports')"> 스포츠 </td>
													<td width="33.3%" class="p-0 text-center height-42" :class="`sidebar-board-${themeType}`" @click="goToPage('live-sports')"> {{themeType == 'orange14' ? 'LIVE 스포츠' : '실시간'}} </td>
													<td width="33.3%" class="p-0 text-center height-42" :class="`sidebar-board-${themeType}`" @click="goToPage('bet-history')"> 배팅내역 </td>
												</tr>
												<tr v-if="themeType != 'gold12' && themeType != 'gold11' && themeType != 'red15' && themeType != 'red12' && themeType != 'blue15' && themeType != 'white' && themeType != 'blue16'" :class="{'bg-blue-grad': themeType == 'blue14'}">
													<td width="33.3%" class="p-0 text-center height-42" :class="`sidebar-board-${themeType}`" @click="goToPage('mini-game')"> 미니게임 </td>
													<td width="33.3%" class="p-0 text-center height-42" :class="`sidebar-board-${themeType}`" @click="goToPage('virtual-sports')"> {{themeType == 'orange14' ? 'BET365' : '가상스포츠'}} </td>
													<td v-if="themeType != 'orange14'" width="33.3%" class="p-0 text-center height-42" :class="`sidebar-board-${themeType}`" @click="goToPage('casino')"> 카지노 </td>
													<td v-else width="33.3%" class="p-0 text-center height-42" :class="`sidebar-board-${themeType}`" @click="goToPage('coupon')"> 쿠폰/포인트 </td>
												</tr>
												<tr v-if="themeType != 'gold12' && themeType != 'gold11' && themeType != 'red15' && themeType != 'red12' && themeType != 'blue15' && themeType != 'white' && themeType != 'blue16'" :class="{'bg-blue-grad': themeType == 'blue14'}">
													<td v-if="themeType == 'orange14'" width="33.3%" class="p-0 text-center height-42" :class="`sidebar-board-${themeType}`" @click="goToPage('casino')"> 카지노 </td>
													<td width="33.3%" class="p-0 text-center height-42" :class="`sidebar-board-${themeType}`" @click="goToPage('attendance')"> 출석현황 </td>
													<td width="33.3%" class="p-0 text-center height-42" :class="`sidebar-board-${themeType}`" @click="goToPage('money-move')"> 머니이동 </td>
													<td v-if="themeType != 'orange14'" width="33.3%" class="p-0 text-center height-42" :class="`sidebar-board-${themeType}`" @click="goToPage('friend')"> 지인추천 </td>
												</tr>
												<tr v-if="themeType != 'gold12' && themeType != 'gold11' && themeType != 'red15' && themeType != 'red12' && themeType != 'blue15' && themeType != 'white' && themeType != 'blue16'" :class="{'bg-blue-grad': themeType == 'blue14'}">
													<td v-if="themeType == 'orange14'" width="33.3%" class="p-0 text-center height-42" :class="`sidebar-board-${themeType}`" @click="goToPage('friend')"> 지인추천 </td>
													<td v-if="themeType != 'red14' && themeType != 'yellow12' && themeType != 'blue14' && themeType != 'blue17' && themeType != 'orange14' && themeType != 'orange13'" width="33.3%" class="p-0 text-center height-42" :class="`sidebar-board-${themeType}`" @click="goToPage('fame')"> 명예의전당 </td>
													<td v-if="themeType == 'red14' || themeType == 'yellow12' || themeType == 'blue17'" width="33.3%" class="p-0 text-center height-42" :class="`sidebar-board-${themeType}`" @click="goToPage('tv')"> 스포츠중계 </td>
													<td v-if="themeType == 'blue14'" width="33.3%" class="p-0 text-center height-42" :class="`sidebar-board-${themeType}`" @click="goToPage('score')"> 라이브스코어 </td>
													<td v-if="themeType == 'orange13'" width="33.3%" class="p-0 text-center height-42" :class="`sidebar-board-${themeType}`" @click="goToPage('notice-rule')"> {{noticeSettings.noticeTitle}} </td>
													<td width="33.3%" class="p-0 text-center height-42" :class="`sidebar-board-${themeType}`" @click="goToPage('event')"> 이벤트 </td>
													<td v-if="themeType != 'orange13'" width="33.3%" class="p-0 text-center height-42" :class="`sidebar-board-${themeType}`" @click="goToPage('notice-rule')"> {{noticeSettings.noticeTitle}} </td>
													<td v-if="themeType == 'orange13'" width="33.3%" class="p-0 text-center height-42" :class="`sidebar-board-${themeType}`" @click="goToPage('note')"> 쪽지함 </td>
												</tr>
												<tr v-if="themeType == 'blue16'">
													<td width="33.3%" class="p-0 text-center height-42" :class="`sidebar-board-${themeType}`" @click="goToPage('mini-game')"> 미니게임 </td>
													<td width="33.3%" class="p-0 text-center height-42" :class="`sidebar-board-${themeType}`" @click="goToPage('lotus')"> 로투스 </td>
													<td width="33.3%" class="p-0 text-center height-42" :class="`sidebar-board-${themeType}`" @click="goToPage('virtual-sports')"> 가상스포츠 </td>
												</tr>
												<tr v-if="themeType == 'blue16'">
													<td width="33.3%" class="p-0 text-center height-42" :class="`sidebar-board-${themeType}`" @click="goToPage('casino')"> 카지노 </td>
													<td width="33.3%" class="p-0 text-center height-42" :class="`sidebar-board-${themeType}`" @click="goToPage('attendance')"> 출석현황 </td>
													<td width="33.3%" class="p-0 text-center height-42" :class="`sidebar-board-${themeType}`" @click="goToPage('friend')"> 지인추천 </td>
												</tr>
												<tr v-if="themeType == 'blue16'">
													<td width="33.3%" class="p-0 text-center height-42" :class="`sidebar-board-${themeType}`" @click="goToPage('fame')"> 명예의전당 </td>
													<td width="33.3%" class="p-0 text-center height-42" :class="`sidebar-board-${themeType}`" @click="goToPage('event')"> 이벤트 </td>
													<td width="33.3%" class="p-0 text-center height-42" :class="`sidebar-board-${themeType}`" @click="goToPage('notice-rule')"> {{noticeSettings.noticeTitle}} </td>
												</tr>
												<tr v-if="themeType == 'gold11' || themeType == 'red12' || themeType == 'blue15'">
													<td width="33.3%" class="p-0 text-center height-42" :class="`sidebar-board-${themeType}`" @click="goToPage('sports')"> 스포츠 </td>
													<td width="33.3%" class="p-0 text-center height-42" :class="`sidebar-board-${themeType}`" @click="goToPage('live-sports')"> LIVE 스포츠 </td>
													<td width="33.3%" class="p-0 text-center height-42" :class="`sidebar-board-${themeType}`" @click="goToPage('bet-history')"> 배팅내역 </td>
												</tr>
												<tr v-if="themeType == 'gold11' || themeType == 'red12' || themeType == 'blue15'">
													<td v-if="themeType == 'red12' || themeType == 'blue15' || themeType == 'gold11'" width="33.3%" class="p-0 text-center height-42" :class="`sidebar-board-${themeType}`" @click="goToPage('mini-game')"> 미니게임 </td>
													<td v-else width="33.3%" class="p-0 text-center height-42" :class="`sidebar-board-${themeType}`" @click="goToPage('boscore')"> {{themeType == 'red15' ? '미니게임' : '별다리'}} </td>
													<td v-if="themeType == 'red12' || themeType == 'blue15'" width="33.3%" class="p-0 text-center height-42" :class="`sidebar-board-${themeType}`" @click="goToPage('poker')"> 포커 </td>
													<td v-if="themeType != 'gold11'" width="33.3%" class="p-0 text-center height-42" :class="`sidebar-board-${themeType}`" @click="goToPage('casino')">해외카지노</td>
													<td v-if="themeType == 'red15'" width="33.3%" class="p-0 text-center height-42" :class="`sidebar-board-${themeType}`" @click="goToPage('coupon')"> 쿠폰/포인트 </td>
													<td v-if="themeType == 'gold11'" width="33.3%" class="p-0 text-center height-42" :class="`sidebar-board-${themeType}`" @click="goToPage('virtual-sports')"> BET365 </td>
													<td v-if="themeType == 'gold11'" width="33.3%" class="p-0 text-center height-42" :class="`sidebar-board-${themeType}`" @click="goToPage('lotus')"> 로투스 </td>
												</tr>
												<tr v-if="themeType == 'gold11' || themeType == 'red12' || themeType == 'blue15'">
													<td v-if="themeType != 'gold11'" width="33.3%" class="p-0 text-center height-42" :class="`sidebar-board-${themeType}`" @click="goToPage('virtual-sports')"> BET365 </td>
													<td v-if="themeType != 'gold11'" width="33.3%" class="p-0 text-center height-42" :class="`sidebar-board-${themeType}`" @click="goToPage('lotus')"> 로투스 </td>
													<td v-if="themeType == 'red15'" width="33.3%" class="p-0 text-center height-42" :class="`sidebar-board-${themeType}`" @click="goToPage('betgame')"> 벳게임 </td>
													<td v-if="themeType == 'gold11'" width="33.3%" class="p-0 text-center height-42" :class="`sidebar-board-${themeType}`" @click="goToPage('casino')">해외카지노</td>
													<td v-if="themeType == 'red12' || themeType == 'blue15'" width="33.3%" class="p-0 text-center height-42" :class="`sidebar-board-${themeType}`" @click="goToPage('coupon')"> 쿠폰/포인트 </td>
													<td v-if="themeType == 'gold11'" width="33.3%" class="p-0 text-center height-42" :class="`sidebar-board-${themeType}`" @click="goToPage('event')"> 이벤트 </td>
													<td v-if="themeType == 'gold11'" width="33.3%" class="p-0 text-center height-42" :class="`sidebar-board-${themeType}`" @click="goToPage('notice-rule')"> 공지/규정 </td>
												</tr>
												<tr v-if="themeType == 'gold11' || themeType == 'red12' || themeType == 'blue15'">
													<td width="33.3%" class="p-0 text-center height-42" :class="`sidebar-board-${themeType}`" @click="goToPage('money-move')"> 머니이동 </td>
													<td width="33.3%" class="p-0 text-center height-42" :class="`sidebar-board-${themeType}`" @click="goToPage('attendance')"> 출석현황 </td>
													<td v-if="themeType == 'red15'" width="33.3%" class="p-0 text-center height-42" :class="`sidebar-board-${themeType}`" @click="goToPage('cash')"> 캐쉬내역 </td>
													<td v-else width="33.3%" class="p-0 text-center height-42" :class="`sidebar-board-${themeType}`" @click="goToPage('fame')"> 명예의전당 </td>
												</tr>
												<tr v-if="themeType == 'red15'">
													<td width="33.3%" class="p-0 text-center height-42" :class="`sidebar-board-${themeType}`" @click="goToPage('sports')"> 스포츠 </td>
													<td width="33.3%" class="p-0 text-center height-42" :class="`sidebar-board-${themeType}`" @click="goToPage('live-sports')"> LIVE 스포츠 </td>
													<td width="33.3%" class="p-0 text-center height-42" :class="`sidebar-board-${themeType}`" @click="goToPage('boscore')"> 미니게임 </td>
												</tr>
												<tr v-if="themeType == 'red15'">
													<td width="33.3%" class="p-0 text-center height-42" :class="`sidebar-board-${themeType}`" @click="goToPage('casino')"> 해외카지노 </td>
													<td width="33.3%" class="p-0 text-center height-42" :class="`sidebar-board-${themeType}`" @click="goToPage('token')"> 토큰게임 </td>
													<td width="33.3%" class="p-0 text-center height-42" :class="`sidebar-board-${themeType}`" @click="goToPage('virtual-sports')"> BET365 </td>
												</tr>
												<tr v-if="themeType == 'red15'">
													<td width="33.3%" class="p-0 text-center height-42" :class="`sidebar-board-${themeType}`" @click="goToPage('mgm')"> MGM </td>
													<td width="33.3%" class="p-0 text-center height-42" :class="`sidebar-board-${themeType}`" @click="goToPage('lotus')"> 로투스 </td>
													<td width="33.3%" class="p-0 text-center height-42" :class="`sidebar-board-${themeType}`" @click="goToPage('betgame')"> 벳게임 </td>
												</tr>
												<tr v-if="themeType == 'red15'">
													<td width="33.3%" class="p-0 text-center height-42" :class="`sidebar-board-${themeType}`" @click="goToPage('friend')"> 지인추천 </td>
													<td width="33.3%" class="p-0 text-center height-42" :class="`sidebar-board-${themeType}`" @click="goToPage('attendance')"> 출석현황 </td>
													<td width="33.3%" class="p-0 text-center height-42" :class="`sidebar-board-${themeType}`" @click="goToPage('fame')"> 명예의전당 </td>
												</tr>
												<tr v-if="themeType == 'red15'">
													<td width="33.3%" class="p-0 text-center height-42" :class="`sidebar-board-${themeType}`" @click="goToPage('bet-history')"> 배팅내역 </td>
													<td width="33.3%" class="p-0 text-center height-42" :class="`sidebar-board-${themeType}`" @click="goToPage('event')"> 이벤트 </td>
													<td width="33.3%" class="p-0 text-center height-42" :class="`sidebar-board-${themeType}`" @click="goToPage('notice-rule')"> 공지/규정 </td>
												</tr>
												<tr v-if="themeType == 'red15'">
													<td width="33.3%" class="p-0 text-center height-42" :class="`sidebar-board-${themeType}`" @click="goToPage('noticeBoard')"> 게시판 </td>
													<td width="33.3%" class="p-0 text-center height-42" :class="`sidebar-board-${themeType}`" @click="goToPage('money-move')"> 머니이동 </td>
													<td width="33.3%" class="p-0 text-center height-42" :class="`sidebar-board-${themeType}`" @click="goToPage('coupon')"> 쿠폰/포인트 </td>
												</tr>
												<tr v-if="themeType == 'gold12'">
													<td width="33.3%" class="p-0 text-center height-42" :class="`sidebar-board-${themeType}`" @click="goToPage('sports')"> 스포츠 </td>
													<td width="33.3%" class="p-0 text-center height-42" :class="`sidebar-board-${themeType}`" @click="goToPage('live-sports')"> LIVE 스포츠 </td>
													<td width="33.3%" class="p-0 text-center height-42" :class="`sidebar-board-${themeType}`" @click="goToPage('bet-history')"> 배팅내역 </td>
												</tr>
												<tr v-if="themeType == 'gold12'">
													<td width="33.3%" class="p-0 text-center height-42" :class="`sidebar-board-${themeType}`" @click="goToPage('mini-game')"> 미니게임 </td>
													<td width="33.3%" class="p-0 text-center height-42" :class="`sidebar-board-${themeType}`" @click="goToPage('virtual-sports')"> BET365 </td>
													<td width="33.3%" class="p-0 text-center height-42" :class="`sidebar-board-${themeType}`" @click="goToPage('betgame')"> 벳게임 </td>
												</tr>
												<tr v-if="themeType == 'gold12'">
													<td width="33.3%" class="p-0 text-center height-42" :class="`sidebar-board-${themeType}`" @click="goToPage('casino')"> 해외카지노 </td>
													<td width="33.3%" class="p-0 text-center height-42" :class="`sidebar-board-${themeType}`" @click="goToPage('customer-center')"> 문의 </td>
													<td width="33.3%" class="p-0 text-center height-42" :class="`sidebar-board-${themeType}`" @click="goToPage('note')"> 쪽지함 </td>
												</tr>
												<tr v-if="themeType == 'gold12'">
													<td width="33.3%" class="p-0 text-center height-42" :class="`sidebar-board-${themeType}`" @click="goToPage('notice-rule')"> 공지/규정 </td>
													<td width="33.3%" class="p-0 text-center height-42" :class="`sidebar-board-${themeType}`" @click="goToPage('event')"> 이벤트 </td>
													<td width="33.3%" class="p-0 text-center height-42" :class="`sidebar-board-${themeType}`" @click="goToPage('attendance')"> 출석상황 </td>
												</tr>
												<tr v-if="themeType == 'gold12'">
													<td width="33.3%" class="p-0 text-center height-42" :class="`sidebar-money-${themeType}`" @click="goToPage('payin')"> <i class="fa fa-plus-square" :class="`sidebar-left-icon-${themeType}`"></i> 입금 </td>
													<td width="33.3%" class="p-0 text-center height-42" :class="`sidebar-money-${themeType}`" @click="goToPage('payout')"> <i class="fa fa-minus-square" :class="`sidebar-left-icon-${themeType}`"></i> 출금 </td>
													<td width="33.3%" class="p-0 text-center height-42" :class="`sidebar-money-${themeType}`" @click="goToPage('customer-center')"> <i class="fa fa-comments-o" :class="`sidebar-left-icon-${themeType}`"></i> 문의 </td>
												</tr>
											</tbody>
										</table> -->
										<table class="table table-bordered table-td-valign-middle m-0 p-0 cursor f-s-12">
											<tbody>
												<tr>
													<td width="33.3%" class="p-0 text-center height-42" :class="`sidebar-money-${themeType}`" @click="goToPage(12)"> <i class="fa fa-plus-square" :class="`sidebar-left-icon-${themeType}`"></i> 입금 </td>
													<td width="33.3%" class="p-0 text-center height-42" :class="`sidebar-money-${themeType}`" @click="goToPage(13)"> <i class="fa fa-minus-square" :class="`sidebar-left-icon-${themeType}`"></i> 출금 </td>
													<td width="33.3%" class="p-0 text-center height-42" :class="`sidebar-money-${themeType}`" @click="goToPage(8)"> <i class="fa fa-comments-o" :class="`sidebar-left-icon-${themeType}`"></i> 문의 </td>
												</tr>
											</tbody>
										</table>
										<el-row v-for="(row, rowIndex) in menuRowCount" :key="`menu-${rowIndex}`" class="display-flex">
											<div v-if="leftMenu[rowIndex * 3].type != -1" class="float-left p-0 text-center height-42 display-center border-1-blr-black1 cursor" style="flex: 1 1 0;" :class="`sidebar-board-${themeType}`" @click="goToPage(leftMenu[rowIndex * 3].type)"> {{leftMenu[rowIndex * 3].title}} </div>
											<div v-if="leftMenu[rowIndex * 3 + 1].type != -1" class="float-left p-0 text-center height-42 display-center cursor" style="flex: 1 1 0;" :class="[`sidebar-board-${themeType}`, leftMenu[rowIndex * 3 + 2].type == -1 ? 'border-1-blr-black' : 'border-1-blr-black1']" @click="goToPage(leftMenu[rowIndex * 3 + 1].type)"> {{leftMenu[rowIndex * 3 + 1].title}} </div>
											<div v-if="leftMenu[rowIndex * 3 + 2].type != -1" class="float-left p-0 text-center height-42 display-center border-1-blr-black cursor" style="flex: 1 1 0;" :class="`sidebar-board-${themeType}`" @click="goToPage(leftMenu[rowIndex * 3 + 2].type)"> {{leftMenu[rowIndex * 3 + 2].title}} </div>
										</el-row>
									</div>
									<!-- <div v-if="themeType == 'gold12'" class="panel-heading p-t-2 p-l-2 p-r-2 p-b-0" :class="`sidebar-board-bg-${themeType}`">
										<table class="table table-bordered table-td-valign-middle m-0 p-0 cursor f-s-12">
											<tbody>
												<tr>
													<td width="33.3%" class="p-0 text-center height-42" :class="`sidebar-board-${themeType}`" @click="goToPage('sports')"> 스포츠 </td>
													<td width="33.3%" class="p-0 text-center height-42" :class="`sidebar-board-${themeType}`" @click="goToPage('live-sports')"> LIVE 스포츠 </td>
													<td width="33.3%" class="p-0 text-center height-42" :class="`sidebar-board-${themeType}`" @click="goToPage('bet-history')"> 배팅내역 </td>
												</tr>
												<tr>
													<td width="33.3%" class="p-0 text-center height-42" :class="`sidebar-board-${themeType}`" @click="goToPage('mini-game')"> 미니게임 </td>
													<td width="33.3%" class="p-0 text-center height-42" :class="`sidebar-board-${themeType}`" @click="goToPage('virtual-sports')"> BET365 </td>
													<td width="33.3%" class="p-0 text-center height-42" :class="`sidebar-board-${themeType}`" @click="goToPage('betgame')"> 벳게임 </td>
												</tr>
												<tr>
													<td width="33.3%" class="p-0 text-center height-42" :class="`sidebar-board-${themeType}`" @click="goToPage('casino')"> 해외카지노 </td>
													<td width="33.3%" class="p-0 text-center height-42" :class="`sidebar-board-${themeType}`" @click="goToPage('customer-center')"> 문의 </td>
													<td width="33.3%" class="p-0 text-center height-42" :class="`sidebar-board-${themeType}`" @click="goToPage('note')"> 쪽지함 </td>
												</tr>
												<tr>
													<td width="33.3%" class="p-0 text-center height-42" :class="`sidebar-board-${themeType}`" @click="goToPage('notice-rule')"> 공지/규정 </td>
													<td width="33.3%" class="p-0 text-center height-42" :class="`sidebar-board-${themeType}`" @click="goToPage('event')"> 이벤트 </td>
													<td width="33.3%" class="p-0 text-center height-42" :class="`sidebar-board-${themeType}`" @click="goToPage('attendance')"> 출석상황 </td>
												</tr>
												<tr>
													<td width="33.3%" class="p-0 text-center height-42" :class="`sidebar-money-${themeType}`" @click="goToPage('payin')"> <i class="fa fa-plus-square" :class="`sidebar-left-icon-${themeType}`"></i> 입금 </td>
													<td width="33.3%" class="p-0 text-center height-42" :class="`sidebar-money-${themeType}`" @click="goToPage('payout')"> <i class="fa fa-minus-square" :class="`sidebar-left-icon-${themeType}`"></i> 출금 </td>
													<td width="33.3%" class="p-0 text-center height-42" :class="`sidebar-money-${themeType}`" @click="goToPage('customer-center')"> <i class="fa fa-comments-o" :class="`sidebar-left-icon-${themeType}`"></i> 문의 </td>
												</tr>
											</tbody>
										</table>
									</div> -->
									<!-- <el-row v-if="themeType == 'red12' || themeType == 'blue15'" class="p-2 p-t-0">
										<div class="float-left p-0 text-center height-42 display-center border-1-blr-black1 cursor width-50pro" :class="`sidebar-board-${themeType}`" @click="goToPage('event')"> 이벤트 </div>
										<div class="float-left p-0 text-center height-42 display-center border-1-blr-black cursor width-50pro" :class="`sidebar-board-${themeType}`" @click="goToPage('notice-rule')"> 공지/규정 </div>
									</el-row> -->
									<LoginSide v-if="themeType == 'blue18' || themeType == 'yellow13' || themeType == 'blue13' || themeType == 'yellow11' || themeType == 'yellow14'" />
									<!-- 서브메뉴 끝 -->
									<el-row v-if="themeType != 'green'">
										<SidebarMainMenu v-if="leftSideMenuType == 0 || layoutType == 'layout2' || layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6'"/>
										<SidebarSubMenu v-else/>
									</el-row>
									<el-row v-else class="height-full">
										<el-row class="p-t-8">
											<el-col :span="8" class="text-center cursor">
												<img :src="`/image/Home/Menu/${themeType}/casino.png`" width="95%" @click="goToPage(32)">
											</el-col>
											<el-col :span="8" class="text-center cursor">
												<img :src="`/image/Home/Menu/${themeType}/slot.png`" width="95%" @click="goToPage(33)">
											</el-col>
											<el-col :span="8" class="text-center cursor">
												<img :src="`/image/Home/Menu/${themeType}/888sport.png`" width="95%" @click="goToPage(36)">
											</el-col>
										</el-row>
										<el-row class="p-t-8">
											<el-col :span="8" class="text-center cursor">
												<img :src="`/image/Home/Menu/${themeType}/payin.png`" width="95%" @click="goToPage(12)">
											</el-col>
											<el-col :span="8" class="text-center cursor">
												<img :src="`/image/Home/Menu/${themeType}/payout.png`" width="95%" @click="goToPage(13)">
											</el-col>
											<el-col :span="8" class="text-center cursor">
												<img :src="`/image/Home/Menu/${themeType}/customer.png`" width="95%" @click="goToPage(8)">
											</el-col>
										</el-row>
										<el-row class="p-t-8">
											<el-col :span="8" class="text-center cursor">
												<img :src="`/image/Home/Menu/${themeType}/note.png`" width="95%" @click="goToPage(9)">
											</el-col>
											<el-col :span="8" class="text-center cursor">
												<img :src="`/image/Home/Menu/${themeType}/attendance.png`" width="95%" @click="goToPage(11)">
											</el-col>
											<el-col :span="8" class="text-center cursor">
												<img :src="`/image/Home/Menu/${themeType}/friend.png`" width="95%" @click="goToPage(10)">
											</el-col>
										</el-row>
										<el-row class="p-t-8" style="padding-bottom:400px">
											<el-col :span="8" class="text-center cursor">
												<img :src="`/image/Home/Menu/${themeType}/notice.png`" width="95%" @click="goToPage(5)">
											</el-col>
											<el-col :span="8" class="text-center cursor">
												<img :src="`/image/Home/Menu/${themeType}/event.png`" width="95%" @click="goToPage(6)">
											</el-col>
										</el-row>
									</el-row>
									<el-row v-if="isMobile && (themeType == 'orange12' || themeType == 'blue13' || themeType == 'yellow11')" class="p-10">
										<el-row v-for="(banner, index) in banners" :key="`banner-${index}`" v-if="banner.type != -1" class="text-center m-t-20">
											<a v-if="banner.type == 0" :href="banner.url" target="_blank">
												<img :src="banner.img | filterEmblem">
											</a>
											<a v-else :href="banner.url">
												<img :src="banner.img | filterEmblem">
											</a>
										</el-row>
									</el-row>
								</div>
								<!-- end panel -->
							</div>
						</div>
					</el-scrollbar>
				</div>
				<div v-show="!isMobile && !showLeftPanel && layoutType != 'layout2' && layoutType != 'layout5'" :id="`sidebar-hamburg-${themeType}`" @click="onClickShowPanel()">
					<el-row class="p-t-10 text-center">
						<img class="img-hamburg" :src="'/image/Home/hamburg.png'">
					</el-row>
					<el-row class="display-center height-full" style="justify-content: flex-end;">
						<img class="img-sidebutton float-right" :src="`/image/Home/${themeType}/side-button.png`">
					</el-row>
				</div>
			</div>
			<!-- end sidebar scrollbar -->
		</div>
		<div v-if="showLeftPanel && isMobile" class="position-absolute width-full height-full" style="background-color: rgba(0, 0, 0, 0.6); z-index: 1030; left: 0; touch-action: none;" :style="layoutType == 'layout2' || layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6' ? 'top: 0;' : themeType == 'red12' || themeType == 'gold11' ? 'top: 60px;' : 'top: 43px;'" @click="onClickBody"></div>
	</div>
</client-only>
</template>

<script>
import { mapGetters } from "vuex";
import SidebarMainMenu from '~/components/Sidebar/SidebarMainMenu.vue'
import SidebarSubMenu from '~/components/Sidebar/SidebarSubMenu.vue'
import { setSidePanel, getMiniAddress } from "@/assets/js/utils";
import LoginSide from "~/components/Auth/LoginSide"
import { linkImage } from '~/assets/js/data/datamanagement.js'

export default {
	name: "login",
	components: { SidebarMainMenu, SidebarSubMenu, LoginSide },
  	computed: {
		...mapGetters({
			isMobile: "getIsMobile",
			currentUser: 'auth/currentUser',
			leftSideMenuType: "getLeftSideMenuType",
			screenWidth: "getScreenWidth",
			showLeftPanel: "getShowLeftPanel",
			themeType: 'getThemeType',
      		layoutType: 'getLayoutType',
			noticeSettings: "getNoticeSettings",
			isUseNoteRead: "getIsUseNoteRead",
			noteCount: "getNoteCount",
			isAvailCasino: "getIsAvailCasino",
			sportDomain: "getSportDomain",
      		gameSettings: "getGameSettings",
			isUseDoor: "getIsUseDoor",
			leftMenu: "getLeftMenu",
			banners: "getBanners"
		})
	},
	watch: {
		$route(to, from) {
			this.setSidebar()
		},
		screenWidth(width) {
			this.setSidebar()
		},
		showLeftPanel(val) {
			this.setLeftPanelWidth()
		},
		isMobile(val) {
			this.setLeftPanelWidth()
		}
	},
	filters: {
		filterEmblem(filename) {
			return linkImage(filename);
		}
	},
	data() {
		return {
      		liveGameList: [],                         // 라이브게임 리스트
			sidebarWidth: '299px',
			menuRowCount: 0
		}
	},
	mounted() {
		this.menuRowCount = parseInt(this.leftMenu.filter(x => x.type != -1).length / 3)
		if (this.leftMenu.filter(x => x.type != -1).length % 3 != 0) this.menuRowCount++
		this.setLeftPanelWidth(this.showLeftPanel)
		this.setSidebar()
	},
	methods: {
		setSidePanel,
		getMiniAddress,
		getLogStyle() {
			if (this.themeType == 'orange11') return "width: 80px; left: calc(50% - 40px); top: 20px;"
			if (this.themeType == 'purple11') return "width: 120px; left: calc(50% - 60px); top:10px"
			if (this.themeType == 'red13') return "width: 100px; left: calc(50% - 50px); top:10px"
			if (this.themeType == 'blue12') return "width: 150px; left: calc(50% - 75px); top:10px"
			if (this.themeType == 'yellow19' || this.themeType == 'yellow12') return "width: 150px; left: calc(50% - 75px); top:5px"
			if (this.themeType == 'purple12') return "width: 120px; left: calc(50% - 60px); top:25px"
			if (this.themeType == 'green') return "width: 120px;left: calc(50% - 60px); top: 20px;"
			if (this.themeType == 'blue14') return "width: 150px; left: calc(50% - 75px); top: 20px;"
			if (this.themeType == 'blue16') return "width: 150px; left: calc(50% - 75px); top: 20px;"
			if (this.themeType == 'gold12') return "width: 80px; left: calc(50% - 40px); top: 20px;"
			if (this.themeType == 'yellow13') return "width: 150px; left: calc(50% - 75px); top: 15px;"
			if (this.themeType == 'blue17') return "width: 80px; left: calc(50% - 40px); top: 15px;"
			if (this.themeType == 'white') return "width: 150px; left: calc(50% - 75px); top: 15px;"
			if (this.themeType == 'red14') return "width: 50px; left: calc(50% - 25px); top: 15px;"
			if (this.themeType == 'red15' || this.themeType == 'red12') return "width: 120px; left: calc(50% - 60px); top: 15px;"
			if (this.themeType == 'red11') return "width: 120px; left: calc(50% - 60px); top: 20px;"
			if (this.themeType == 'gold11') return "width: 60px; left: calc(50% - 30px); top: 10px;"
			if (this.themeType == 'orange14') return "width: 100px; left: calc(50% - 50px); top: 20px;"
			if (this.themeType == 'orange13' || this.themeType == 'blue15') return "width: 150px; left: calc(50% - 75px); top: 23px;"
		},
		// 로그아웃
		logout() {
		this.$store.dispatch("auth/logout");
		if (this.isUseDoor) this.$router.push("/Auth/Login")
		},
		showMessage(title, content, button, type) {
			this.$store.commit("dialog/SET_DIALOG_DATA", {
				title: title,
				content: content,
				buttonValue: button,
				type: type
			})
		},
		// 페이지 이동
		goToPage(val) {
			switch (val) {
				case 0:		// 스포츠
					if (this.isUseNoteRead && this.noteCount > 0) {
						this.showMessage('알림메시지', "읽지 않은 중요한 쪽지가 있어 페이지 이동이 불가합니다.", '닫기[Close]', 2)
						return
					}
					if ((this.themeType == 'red15' || this.themeType == 'gold11' || this.themeType == 'yellow14' || this.themeType == 'gold11' || this.themeType == 'red12' || this.themeType == 'blue15') && !this.currentUser) {
						this.showMessage('알림메시지', "로그인 후 이용 가능합니다.", '닫기[Close]', 2)
						return
					}

					this.$store.commit("sports/Init_QUERYLIST")
					this.$router.push("/Sports")
					break
				case 1:		// 실시간
					if (this.isUseNoteRead && this.noteCount > 0) {
						this.showMessage('알림메시지', "읽지 않은 중요한 쪽지가 있어 페이지 이동이 불가합니다.", '닫기[Close]', 2)
						return
					}
					if ((this.themeType == 'red15' || this.themeType == 'gold11' || this.themeType == 'yellow14' || this.themeType == 'gold11' || this.themeType == 'red12' || this.themeType == 'blue15') && !this.currentUser) {
						this.showMessage('알림메시지', "로그인 후 이용 가능합니다.", '닫기[Close]', 2)
						return
					}

					this.$store.commit("sports/Init_QUERYLIST")
					this.$router.push("/LiveSports")
					break
				case 2:		// 미니게임
					if (this.isUseNoteRead && this.noteCount > 0) {
						this.showMessage('알림메시지', "읽지 않은 중요한 쪽지가 있어 페이지 이동이 불가합니다.", '닫기[Close]', 2)
						return
					}
          			this.$router.push(this.getMiniAddress(this.gameSettings, this.themeType))
					break
				case 3:		// 가상스포츠
					if (this.isUseNoteRead && this.noteCount > 0) {
						this.showMessage('알림메시지', "읽지 않은 중요한 쪽지가 있어 페이지 이동이 불가합니다.", '닫기[Close]', 2)
						return
					}
					this.$router.push("/VirtualSports/Football")
					break
				case 4:		// 카지노
					if (this.isUseNoteRead && this.noteCount > 0) {
						this.showMessage('알림메시지', "읽지 않은 중요한 쪽지가 있어 페이지 이동이 불가합니다.", '닫기[Close]', 2)
						return
					}
					if (!this.isAvailCasino) {
						this.showMessage('알림메시지', "업데이트 준비중", '닫기[Close]', 2)
						return
					}
					this.$router.push("/Casino")
					break
				case 5:		// 공지사항
					if (this.layoutType == 'layout2') {
						if (this.currentUser) {
							this.$store.commit('SET_ORANGEDIALOGVISIBLE')
							this.$store.commit('SET_ORANGEDIALOGTAB', 6)
						} else {
							this.$store.commit("SET_LOGINDIALOGVISIBLE");
      						this.$store.commit("SET_LOGINSIDEVERIFY", false)
						}
          			} else {
						this.$router.push("/Notice")
					}
					break
				case 6:		// 이벤트
					this.$router.push("/Event")
					break
				case 7:		// 배팅내역
					if (this.layoutType == 'layout2') {
						if (this.currentUser) {
							this.$store.commit('SET_ORANGEDIALOGVISIBLE')
							this.$store.commit('SET_ORANGEDIALOGTAB', 5)
						} else {
							this.$store.commit("SET_LOGINDIALOGVISIBLE");
      						this.$store.commit("SET_LOGINSIDEVERIFY", false)
						}
          			} else {
						this.$router.push("/BettingHistory/Sports")
					}
					break
				case 8:		// 문의
					if (this.isUseNoteRead && this.noteCount > 0) {
						this.showMessage('알림메시지', "읽지 않은 중요한 쪽지가 있어 페이지 이동이 불가합니다.", '닫기[Close]', 2)
						return
					}
					if (this.layoutType == 'layout2') {
						if (this.currentUser) {
							this.$store.commit('SET_ORANGEDIALOGVISIBLE')
							this.$store.commit('SET_ORANGEDIALOGTAB', 4)
						} else {
							this.$store.commit("SET_LOGINDIALOGVISIBLE");
      						this.$store.commit("SET_LOGINSIDEVERIFY", false)
						}
          			} else {
						this.$router.push("/Customer")
					}
					break
				case 9:		// 쪽지
					if (this.layoutType == 'layout2') {
						if (this.currentUser) {
							this.$store.commit('SET_ORANGEDIALOGVISIBLE')
							this.$store.commit('SET_ORANGEDIALOGTAB', 3)
						} else {
							this.$store.commit("SET_LOGINDIALOGVISIBLE");
      						this.$store.commit("SET_LOGINSIDEVERIFY", false)
						}
          			} else {
						this.$router.push("/Note")
					}
					break
				case 10:	// 지인추천
					this.$router.push("/Friend")
					break
				case 11:	// 출석현황
					this.$router.push("/Attendance")
					break
				case 12:	// 입금
					if (this.isUseNoteRead && this.noteCount > 0) {
						this.showMessage('알림메시지', "읽지 않은 중요한 쪽지가 있어 페이지 이동이 불가합니다.", '닫기[Close]', 2)
						return
					}
     			 	this.$store.commit('SET_POKERREDIRECT', false)
					if (this.layoutType == 'layout2') {
						if (this.currentUser) {
							this.$store.commit('SET_ORANGEDIALOGVISIBLE')
							this.$store.commit('SET_ORANGEDIALOGTAB', 0)
						} else {
							this.$store.commit("SET_LOGINDIALOGVISIBLE");
      						this.$store.commit("SET_LOGINSIDEVERIFY", false)
						}
          			} else {
						this.$router.push("/Money/PayIn")
					}
					break
				case 13:	// 출금
					if (this.isUseNoteRead && this.noteCount > 0) {
						this.showMessage('알림메시지', "읽지 않은 중요한 쪽지가 있어 페이지 이동이 불가합니다.", '닫기[Close]', 2)
						return
					}
     			 	this.$store.commit('SET_POKERREDIRECT', false)
					if (this.layoutType == 'layout2') {
						if (this.currentUser) {
							this.$store.commit('SET_ORANGEDIALOGVISIBLE')
							this.$store.commit('SET_ORANGEDIALOGTAB', 1)
						} else {
							this.$store.commit("SET_LOGINDIALOGVISIBLE");
      						this.$store.commit("SET_LOGINSIDEVERIFY", false)
						}
          			} else {
						this.$router.push("/Money/PayOut")
					}
					break
				case 14:	// 머니이동
					if (this.isUseNoteRead && this.noteCount > 0) {
						this.showMessage('알림메시지', "읽지 않은 중요한 쪽지가 있어 페이지 이동이 불가합니다.", '닫기[Close]', 2)
						return
					}
					if (this.layoutType == 'layout2') {
						if (this.currentUser) {
							this.$store.commit('SET_ORANGEDIALOGVISIBLE')
							this.$store.commit('SET_ORANGEDIALOGTAB', 2)
						} else {
							this.$store.commit("SET_LOGINDIALOGVISIBLE");
      						this.$store.commit("SET_LOGINSIDEVERIFY", false)
						}
          			} else {
						this.$router.push("/Money/MoneyMove")
					}
					break
				case 15:	// 명예의 전당
					this.$router.push("/Fame")
					break
				case 16:	// 스코어
					this.$router.push("/GameResult")
					break
				case 17:	// 홈페이지
					this.$router.push("/")
					break
				case 18:	// 캐쉬내역
					if (this.layoutType == 'layout2') {
						if (this.currentUser) {
							this.$store.commit('SET_ORANGEDIALOGVISIBLE')
							this.$store.commit('SET_ORANGEDIALOGTAB', 7)
						} else {
							this.$store.commit("SET_LOGINDIALOGVISIBLE");
      						this.$store.commit("SET_LOGINSIDEVERIFY", false)
						}
          			} else {
						this.$router.push("/Money/CashHistory")
					}
					break
				case 19:	// TV
					if (this.themeType == 'yellow14') {
						var windowReference = window.open();
						windowReference.location = 'https://bigwin.livenst.com/banana/livescore/livescore/';
						return
					}
					if (this.themeType == 'gold13') {
						var windowReference = window.open();
						windowReference.location = 'https://totodot79.com/index.php?pa=sports';
						return
         			}
					if (this.themeType == 'yellow12') {
						var windowReference = window.open();
						windowReference.location = 'https://bigwins.liventv.com/givebet/livescore/livescore/'
						return
					}
					this.$router.push("/TV")
					break
				case 20: 	// FX
					this.$router.push("/Mini/Fx")
					break
				case 21:	// 별다리
					if (this.isUseNoteRead && this.noteCount > 0) {
						this.showMessage('알림메시지', "읽지 않은 중요한 쪽지가 있어 페이지 이동이 불가합니다.", '닫기[Close]', 2)
						return
					}
					this.$router.push("/Mini/BoscoreLadder1")
					break
				case 22:	// 토큰
					if (this.isUseNoteRead && this.noteCount > 0) {
						this.showMessage('알림메시지', "읽지 않은 중요한 쪽지가 있어 페이지 이동이 불가합니다.", '닫기[Close]', 2)
						return
					}
					this.$router.push("/Mini/TokenPowerBall")
					break
				case 23:	// 로투스
					if (this.isUseNoteRead && this.noteCount > 0) {
						this.showMessage('알림메시지', "읽지 않은 중요한 쪽지가 있어 페이지 이동이 불가합니다.", '닫기[Close]', 2)
						return
					}
					this.$router.push("/Lotus/Baccarat1")
					break
				case 24:	// 벳게임
					if (this.isUseNoteRead && this.noteCount > 0) {
						this.showMessage('알림메시지', "읽지 않은 중요한 쪽지가 있어 페이지 이동이 불가합니다.", '닫기[Close]', 2)
						return
					}
          			this.$router.push("/BetGames/Baccarat")
					break
				case 25: 	// 888Sport
					var windowReference = window.open();
					windowReference.location = 'https://' + this.sportDomain;
					break
				case 26: 	// 1분 FX
					if (this.isUseNoteRead && this.noteCount > 0) {
						this.showMessage('알림메시지', "읽지 않은 중요한 쪽지가 있어 페이지 이동이 불가합니다.", '닫기[Close]', 2)
						return
					}
					this.$router.push("/Mini/NamedFX1")
					break
				case 27:	// 쿠폰/포인트
					if (this.layoutType == 'layout2') {
						if (this.currentUser) {
							this.$store.commit('SET_ORANGEDIALOGVISIBLE')
							this.$store.commit('SET_ORANGEDIALOGTAB', 9)
						} else {
							this.$store.commit("SET_LOGINDIALOGVISIBLE");
      						this.$store.commit("SET_LOGINSIDEVERIFY", false)
						}
          			} else {
						this.$router.push("/Coupon")
					}
					break
				case 28:	// EOS
					if (this.isUseNoteRead && this.noteCount > 0) {
						this.showMessage('알림메시지', "읽지 않은 중요한 쪽지가 있어 페이지 이동이 불가합니다.", '닫기[Close]', 2)
						return
					}
					this.$router.push("/Mini/EOSPowerBall1")
					break
				case 29:	// 동행복권
					if (this.isUseNoteRead && this.noteCount > 0) {
						this.showMessage('알림메시지', "읽지 않은 중요한 쪽지가 있어 페이지 이동이 불가합니다.", '닫기[Close]', 2)
						return
					}
					this.$router.push("/Mini/CompanionKenoLadder")
					break
				case 30:	// MGM				
					if (this.isUseNoteRead && this.noteCount > 0) {
						this.showMessage('알림메시지', "읽지 않은 중요한 쪽지가 있어 페이지 이동이 불가합니다.", '닫기[Close]', 2)
						return
					}
					this.$router.push("/MGM/MGMBaccarat1")
					break
				case 31:	// 포커
					this.$router.push("/Poker")
					break;
				case 32:	// 라이브 카지노
					if (this.isUseNoteRead && this.noteCount > 0) {
						this.showMessage('알림메시지', "읽지 않은 중요한 쪽지가 있어 페이지 이동이 불가합니다.", '닫기[Close]', 2)
						return
					}
					if (!this.isAvailCasino) {
						this.showMessage('알림메시지', "업데이트 준비중", '닫기[Close]', 2)
						return
					}
					this.$router.push({path: "/Casino", query: {type: 1}})
					break
				case 33:	// 슬롯
					if (this.isUseNoteRead && this.noteCount > 0) {
						this.showMessage('알림메시지', "읽지 않은 중요한 쪽지가 있어 페이지 이동이 불가합니다.", '닫기[Close]', 2)
						return
					}
					if (!this.isAvailCasino) {
						this.showMessage('알림메시지', "업데이트 준비중", '닫기[Close]', 2)
						return
					}
					this.$router.push({path: "/Casino", query: {type: 2}})
					break
				case 34:	// 회원프로필
					this.$store.commit('SET_ORANGEDIALOGVISIBLE')
          			this.$store.commit('SET_ORANGEDIALOGTAB', 8)
					break
				case 35:
					this.$router.push("/NoticeBoard")
					break;
				case 36:	// 888스포츠
					var windowReference = window.open();
					windowReference.location = 'https://' + this.sportDomain;
					break;
				case 74:	// 게시판
					this.$router.push("/FuturesTrading")
					break;
				case 75:	// 게시판
					this.$router.push("/InsightBets")
					break;
			}
		},
		onClickShowPanel() {
			this.$store.commit("SET_SHOWLEFTPANEL", !this.showLeftPanel)
		},
		setSidebar() {
			if (this.layoutType == 'layout5') {
				if (((this.$router.currentRoute.name !== 'Sports' && this.$router.currentRoute.name !== 'LiveSports') && this.screenWidth > 1280 && this.screenWidth < 1440) || 
					((this.$router.currentRoute.name == 'Sports' || this.$router.currentRoute.name == 'LiveSports') && this.screenWidth > 1280 && this.screenWidth < 1600) ||
					(this.$router.currentRoute.name == 'Sports' || this.$router.currentRoute.name == 'LiveSports') && this.screenWidth > 1860) {
					this.$store.commit("SET_SHOWLEFTPANEL", true)
				} else {
					this.$store.commit("SET_SHOWLEFTPANEL", false)
				}
			} else {
				if (this.screenWidth >= 1860 || 
					((this.$router.currentRoute.name !== 'Sports' && this.$router.currentRoute.name !== 'LiveSports') && this.screenWidth > 1280 && this.screenWidth < 1440) || 
					((this.$router.currentRoute.name == 'Sports' || this.$router.currentRoute.name == 'LiveSports') && this.screenWidth > 1280 && this.screenWidth < 1600)) {
					this.$store.commit("SET_SHOWLEFTPANEL", true)
				} else {
					this.$store.commit("SET_SHOWLEFTPANEL", false)
				}
			}
		},
		setLeftPanelWidth() {
			if (this.showLeftPanel == true) {
				if (this.layoutType == 'layout2') {
					this.sidebarWidth = "271px"
				} else if (this.layoutType == 'layout3' || this.layoutType == 'layout5' || this.layoutType == 'layout6') {
					this.sidebarWidth = '320px'
				} else {
					this.sidebarWidth = "299px"
				}
			} else {
				if (this.isMobile) {
					this.sidebarWidth = "0"
				} else {
					this.sidebarWidth = "50px"
				}	
			}
		},
		onClickBody() {
			this.setSidePanel(this.screenWidth, this.$router.currentRoute.name, this.themeType)
		},
		mouseOver() {
			if (this.isMobile) return
			if ((this.layoutType == 'layout2' || this.layoutType == 'layout5') && !this.showLeftPanel) {
				this.$store.commit("SET_SHOWLEFTPANEL", true)
				this.setLeftPanelWidth()
			}
		},
		mouseLeave() {
			if (this.isMobile) return
			if ((this.layoutType != 'layout5' && this.screenWidth >= 1860) ||
				((this.layoutType == 'layout5') && this.screenWidth >= 1860 && (this.$router.currentRoute.name == 'Sports' || this.$router.currentRoute.name == 'LiveSports')) || 
				((this.$router.currentRoute.name !== 'Sports' && this.$router.currentRoute.name !== 'LiveSports') && this.screenWidth > 1280 && this.screenWidth <= 1440) || 
				((this.$router.currentRoute.name == 'Sports' || this.$router.currentRoute.name == 'LiveSports') && this.screenWidth > 1280 && this.screenWidth < 1600)) {
				return
			}
			if (this.showLeftPanel) {
				this.$store.commit("SET_SHOWLEFTPANEL", false)
				this.setLeftPanelWidth()
			}
		}
	}
}
    
</script>