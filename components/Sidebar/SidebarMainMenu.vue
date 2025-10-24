<template>  
<client-only>
	<div :class="{'m-b-30' : !isMobile}">
		<el-row v-if="!isMobile && themeType == 'gold13'" class="text-white p-l-24 p-r-24 p-t-24">
			<el-row class="m-b-8">
			<div class="b-r-6 float-left p-8 p-l-16" :class="`pay-button-${themeType}`" style="height: 36px; width: calc(50% - 8px);" @click="goToPage('payin')">
				<img :src="`/image/Home/${themeType}/payin.png`" width="20"> 입금
			</div>
			<div class="b-r-6 float-right p-8 p-l-16" :class="`pay-button-${themeType}`" style="height: 36px; width: calc(50% - 8px);" @click="goToPage('payout')">
				<img :src="`/image/Home/${themeType}/payout.png`" width="20"> 출금
			</div>
			</el-row>
			<el-row class="m-b-8">
			<div class="b-r-6 float-left p-8 p-l-16" :class="`pay-button-${themeType}`" style="height: 36px; width: calc(50% - 8px);" @click="goToPage('note')">
				<img :src="`/image/Home/${themeType}/note.png`" width="20"> 쪽지
			</div>
			<div class="b-r-6 float-right p-8 p-l-16" :class="`pay-button-${themeType}`" style="height: 36px; width: calc(50% - 8px);" @click="goToPage('customer-center')">
				<img :src="`/image/Home/${themeType}/customer.png`" width="20"> 문의
			</div>
			</el-row>
			<div class="border-none b-r-6 width-full p-8 p-l-16 m-b-8" :class="`signup-button-${themeType}`" style="height: 36px;" @click="goToPage('moneymove')">
			<img :src="`/image/Home/${themeType}/moneymove.png`" width="20"> 머니이동
			</div>
			<div class="border-none b-r-6 width-full p-8 p-l-16 m-b-8" :class="`signup-button-${themeType}`" style="height: 36px;" @click="goToPage('coupon')">
			<img :src="`/image/Home/${themeType}/coupon.png`" width="20"> 쿠폰/포인트
			</div>
			<div class="border-none b-r-6 width-full p-8 p-l-16 m-b-8" :class="`signup-button-${themeType}`" style="height: 36px;" @click="goToPage('friend')">
			<img :src="`/image/Home/${themeType}/friend.png`" width="20"> 지인추천
			</div>
			<div class="border-none b-r-6 width-full p-8 p-l-16 m-b-8" :class="`signup-button-${themeType}`" style="height: 36px;" @click="goToPage('cash-history')">
			<img :src="`/image/Home/${themeType}/cash-history.png`" width="20"> 캐쉬내역
			</div>
			<div class="border-none b-r-6 width-full p-8 p-l-16 m-b-8" :class="`signup-button-${themeType}`" style="height: 36px;" @click="goToPage('bethistory')">
			<img :src="`/image/Home/${themeType}/betting-history.png`" width="20"> 배팅내역
			</div>
			<div class="border-none b-r-6 width-full p-8 p-l-16 m-b-8" :class="`signup-button-${themeType}`" style="height: 36px;" @click="goToPage('attendance')">
			<img :src="`/image/Home/${themeType}/attendance.png`" width="20"> 출석현황
			</div>
			<div v-if="themeType == 'yellow14'" class="border-none b-r-6 width-full p-8 p-l-16 m-b-8" :class="`signup-button-${themeType}`" style="height: 36px;" @click="goToPage('fame')">
			<img :src="`/image/Home/${themeType}/fame.png`" width="20"> 명예의전당
			</div>
		</el-row>
		<!-- 검색 -->
		<el-row v-if="themeType == 'blue14'" style="height: 5px; background-image: linear-gradient(to right,  #Ae8625 0%,  #f7ef8a 30%,  #d2ac47 60%, #fdd286 100%) !important;"></el-row>
		<el-row v-if="themeType == 'blue16'" style="height: 5px; background-image: linear-gradient(to right, #0b2938 0%, #1d6f95 100%);"></el-row>
		<el-row v-if="themeType == 'gold12'" style="height: 5px; background: #ffeaad;"></el-row>
		<el-row v-if="themeType == 'blue17'" style="height: 5px; background: #4c6f87;"></el-row>
		<el-row v-if="themeType == 'orange14'" style="height: 5px; background: #626a6d;"></el-row>
		<el-row v-if="themeType == 'yellow13'" style="height: 5px; background-image: linear-gradient(to right,  #ffbe00 0%,  #ffbe00 30%,  #ffbe00 60%, #ffbe00 100%) !important;"></el-row>
		<el-row v-if="themeType == 'red14' && !isMobile" style="height: 5px; background: #de00d3;"></el-row>
		<el-row v-if="themeType == 'yellow12' && !isMobile" style="height: 5px; background: #ffc600;"></el-row>
		<el-row v-if="themeType == 'red12' && !isMobile" style="height: 5px; background-image: linear-gradient(to bottom, #ff0030 0%, #ff0857 100%);"></el-row>
		<el-row v-if="themeType == 'blue15' && !isMobile" style="height: 5px; background-image: linear-gradient(to bottom, #fec400 0%, #fec400 100%);"></el-row>
		<el-row v-if="themeType == 'red11' && !isMobile" style="height: 5px; background-image: linear-gradient(to bottom, #7e7e7e 0%, #707175 20%, #707175 50%, #575e64 80%, #404855 100%);"></el-row>
		<el-row v-if="themeType == 'purple12' && !isMobile" style="height: 5px; background-image: linear-gradient(to bottom, #7e7e7e 0%, #67686a 20%, #575e64 50%, #404855 80%, #293545 100%);"></el-row>
		<el-row v-if="themeType == 'purple11' && !isMobile" style="height: 5px; background-image: linear-gradient(to bottom, #7e7e7e 0%, #707175 20%, #575e64 50%, #404855 80%, #293545 100%);"></el-row>
		<el-row v-if="themeType == 'gold11' && !isMobile" style="height: 5px; background: #f29200;"></el-row>
		<el-row v-if="themeType == 'orange13' && !isMobile" style="height: 5px; background: linear-gradient(to right, #fc7604 0%, #fc7604 100%);"></el-row>
		<!-- 검색 끝 -->
		<el-row v-if="!isShowCasino">
			<el-row v-if="themeType == 'yellow15'" class="f-s-12 m-t-24 m-b-8 text-white p-l-8 p-r-8">
				<el-row class="display-flex b-r-6">
					<div :class="`${themeType}-userinfo-button`" style="flex: 1 1 0;" @click="goToPage('payin')">
						<el-row class="height-27 display-center">
							<img :src="`/image/Sidebar/${themeType}/payin.png`" class="i-payin">
						</el-row>
						<el-row class="text-center">
							입금
						</el-row>
					</div>
					<div :class="`${themeType}-userinfo-button`" style="flex: 1 1 0;" @click="goToPage('payout')">
						<el-row class="height-27 display-center">
							<img :src="`/image/Sidebar/${themeType}/payout.png`" class="i-payout">
						</el-row>
						<el-row class="text-center">
							출금
						</el-row>
					</div>
					<div :class="`${themeType}-userinfo-button`" style="flex: 1 1 0;" @click="goToPage('note')">
						<el-row class="height-27 display-center">
							<img :src="`/image/Sidebar/${themeType}/note.png`" class="i-note">
						</el-row>
						<el-row class="text-center">
							쪽지
						</el-row>
					</div>
					<div :class="`${themeType}-userinfo-button`" style="flex: 1 1 0;" @click="goToPage('customer-center')">
						<el-row class="height-27 display-center">
							<img :src="`/image/Sidebar/${themeType}/question.png`" class="i-customer">
						</el-row>
						<el-row class="text-center">
							문의
						</el-row>
					</div>
				</el-row>
			</el-row>
			<el-row v-if="layoutType == 'layout2' || themeType == 'yellow11' || themeType == 'yellow15'" class="text-white f-s-14" :class="[showLeftPanel ? 'p-l-8 p-r-8' : 'p-l-5 p-r-5', themeType == 'yellow11' || themeType == 'yellow15' ? '' : 'p-t-35']">
				<div v-if="screenWidth <= 1440" class="f-w-900" :class="{'sidebar-quick-item': showLeftPanel}" data-toggle="collapse" data-target="#mainmenu" aria-expanded="false" aria-controls="mainmenu">
					<div class="float-left" style="width: calc(100% - 24px)">{{showLeftPanel && themeType != 'yellow15' ? 'Main Menu' : showLeftPanel && themeType == 'yellow15' ? '메인메뉴' : ' '}}</div>
					<i v-if="showLeftPanel" class="fa m-r-10 float-right fa-chevron-down m-t-3"></i>
				</div>
				<el-row v-if="screenWidth <= 1440">
					<div class="sidebar-quick-item i-sports" @click="goToPage('prematch')">
						<div class="float-left width-16 p-l-2">
							<img :src="`/image/Sidebar/${themeType}/sports.png`" class="img-sports">
						</div>
						<div v-if="showLeftPanel" class="sidebar-quick-item-text">
							스포츠
						</div>
					</div>
					<div class="sidebar-quick-item i-inplay" @click="goToPage('inplay')">
						<div class="float-left width-16 p-l-2">
							<img :src="`/image/Sidebar/${themeType}/inplay.png`" class="img-inplay">
						</div>
						<div v-if="showLeftPanel" class="sidebar-quick-item-text">
							{{themeType == 'yellow15' ? '인플레이' : '실시간 스포츠'}}
						</div>
					</div>
					<div class="sidebar-quick-item i-mini" @click="goToPage('mini')">
						<div class="float-left width-16 p-l-2">
							<img :src="`/image/Sidebar/${themeType}/mini.png`" class="img-mini">
						</div>
						<div v-if="showLeftPanel" class="sidebar-quick-item-text">
							미니게임
						</div>
					</div>
					<div class="sidebar-quick-item i-virtual" @click="goToPage('virtual')">
						<div class="float-left width-16 p-l-2">
							<img :src="`/image/Sidebar/${themeType}/virtual.png`" class="img-virtual">
						</div>
						<div v-if="showLeftPanel" class="sidebar-quick-item-text">
							가상스포츠
						</div>
					</div>
					<div class="sidebar-quick-item i-casino" @click="goToPage('casino')">
						<div class="float-left width-16 p-l-2">
							<img :src="`/image/Sidebar/${themeType}/casino.png`" class="img-casino">
						</div>
						<div v-if="showLeftPanel" class="sidebar-quick-item-text">
							카지노
						</div>
					</div>
					<div class="sidebar-quick-item i-casino" @click="goToPage('poker')">
						<div class="float-left width-16 p-l-2">
							<img :src="`/image/Sidebar/${themeType}/casino.png`" class="img-casino">
						</div>
						<div v-if="showLeftPanel" class="sidebar-quick-item-text">
							포커
						</div>
					</div>
					<div class="sidebar-quick-item i-casino" @click="goToPage('customer-center')">
						<div class="float-left width-16 p-l-2">
							<img :src="`/image/Sidebar/${themeType}/question.png`" class="img-customer">
						</div>
						<div v-if="showLeftPanel" class="sidebar-quick-item-text">
							고객센터
						</div>
					</div>
					<!-- <div class="sidebar-quick-item i-score" @click="goToPage('livescore')">
						<div class="float-left width-16 p-l-2">
							<img :src="`/image/Sidebar/${themeType}/score.png`" class="img-score">
						</div>
						<div v-if="showLeftPanel" class="sidebar-quick-item-text">
							라이브스코어
						</div>
					</div>
					<div class="sidebar-quick-item i-tv" @click="goToPage('tv')">
						<div class="float-left width-16 p-l-2">
							<img :src="`/image/Sidebar/${themeType}/tv.png`" class="img-tv">
						</div>
						<div v-if="showLeftPanel" class="sidebar-quick-item-text">
							스포츠중계
						</div>
					</div> -->
				</el-row>
				<div class="f-w-900 m-t-8" :class="[{'sidebar-quick-item': showLeftPanel}, `sidebar-quick-item-${themeType}`]" data-toggle="collapse" data-target="#quicklink" aria-expanded="false" aria-controls="quicklink">
					<div class="float-left" style="width: calc(100% - 24px)">{{showLeftPanel && themeType != 'yellow15' ? 'Quick Links' : showLeftPanel && themeType == 'yellow15' ? '바로가기' : ' '}}</div>
					<i v-if="showLeftPanel" class="fa m-r-10 float-right fa-chevron-down m-t-3"></i>
				</div>
				<el-row id="quicklink" class="collapse show" aria-expanded="false">
					<div class="sidebar-quick-item i-moneymove" :class="`sidebar-quick-item-${themeType}`" @click="goToPage('money-move')">
						<div class="float-left width-16 p-l-2">
							<img :src="`/image/Sidebar/${themeType}/moneymove.png`" class="img-moneymove">
						</div>
						<div v-if="showLeftPanel" class="sidebar-quick-item-text">
							머니이동
						</div>
					</div>
					<div class="sidebar-quick-item i-coupon" :class="`sidebar-quick-item-${themeType}`" @click="goToPage('coupon')">
						<div class="float-left width-16 p-l-2">
							<img :src="`/image/Sidebar/${themeType}/coupon.png`" class="img-coupon">
						</div>
						<div v-if="showLeftPanel" class="sidebar-quick-item-text">
							쿠폰/포인트
						</div>
					</div>
					<div class="sidebar-quick-item i-bethistory" :class="`sidebar-quick-item-${themeType}`" @click="goToPage('bethistory')">
						<div class="float-left width-16 p-l-2">
							<img :src="`/image/Sidebar/${themeType}/bethistory.png`" class="img-bethistory">
						</div>
						<div v-if="showLeftPanel" class="sidebar-quick-item-text">
							배팅내역
						</div>
					</div>
					<div class="sidebar-quick-item i-attendance" :class="`sidebar-quick-item-${themeType}`" @click="goToPage('attendance')">
						<div class="float-left width-16 p-l-2">
							<img :src="`/image/Sidebar/${themeType}/attendance.png`" class="img-attendance">
						</div>
						<div v-if="showLeftPanel" class="sidebar-quick-item-text">
							출석현황
						</div>
					</div>
					<div class="sidebar-quick-item i-friend" :class="`sidebar-quick-item-${themeType}`" @click="goToPage('friend')">
						<div class="float-left width-16 p-l-2">
							<img :src="`/image/Sidebar/${themeType}/friend.png`" class="img-friend">
						</div>
						<div v-if="showLeftPanel" class="sidebar-quick-item-text">
							지인추천
						</div>
					</div>
					<div class="sidebar-quick-item i-event" :class="`sidebar-quick-item-${themeType}`" @click="goToPage('event')">
						<div class="float-left width-16 p-l-2">
							<img :src="`/image/Sidebar/${themeType}/event.png`" class="img-event">
						</div>
						<div v-if="showLeftPanel" class="sidebar-quick-item-text">
							이벤트
						</div>
					</div>
					<div class="sidebar-quick-item i-notice" :class="`sidebar-quick-item-${themeType}`" @click="goToPage('notice-rule')">
						<div class="float-left width-16 p-l-2">
							<img :src="`/image/Sidebar/${themeType}/notice.png`" class="img-notice">
						</div>
						<div v-if="showLeftPanel" class="sidebar-quick-item-text">
							공지 / 규정
						</div>
					</div>
					<div class="sidebar-quick-item i-cash" :class="[`sidebar-quick-item-${themeType}`, {'m-b-30': themeType != 'yellow15'}]" @click="goToPage('cash')">
						<div class="float-left width-16 p-l-2">
							<img :src="`/image/Sidebar/${themeType}/cash.png`" class="img-cash">
						</div>
						<div v-if="showLeftPanel" class="sidebar-quick-item-text">
							캐쉬내역
						</div>
					</div>
					<div v-if="themeType == 'yellow15'" class="sidebar-quick-item i-event m-b-30" :class="`sidebar-quick-item-${themeType}`" @click="goToPage('fame')">
						<div class="float-left width-16 p-l-2">
							<img :src="`/image/Sidebar/${themeType}/event.png`" class="img-event">
						</div>
						<div v-if="showLeftPanel" class="sidebar-quick-item-text">
							명예의전당
						</div>
					</div>
				</el-row>
				<div v-if="layoutType == 'layout2'" class="f-w-900 m-t-8" style="padding: 12px 8px; white-space: nowrap;">
					{{showLeftPanel ? '스포츠' : ' '}}
				</div>
			</el-row>
			<div v-if="layoutType == 'layout1' || themeType == 'gold13' || themeType == 'blue18' || themeType == 'yellow15' || themeType == 'yellow14' || themeType == 'yellow21'" class="panel-heading p-2 m-0" 
				:class="{
					'bg-black11': themeType == 'blue16' || themeType == 'purple11' || themeType == 'red13' || themeType == 'blue12' || themeType == 'yellow19' || themeType == 'gold11' || themeType == 'blue14' || themeType == 'red14' || themeType == 'yellow12' || themeType == 'red12' || themeType == 'blue15' || themeType == 'purple12', 
					'bg-black': themeType == 'orange11' || themeType == 'yellow13', 
					'p-l-12 p-r-12': themeType == 'blue18' || themeType == 'yellow15' || themeType == 'yellow14' || themeType == 'gold13',
					'no-bg': !isBlackMode}">
				<ul class="nav p-t`1-2">
					<li
						:class="[{
							'bg-black11': themeType == 'purple11' || themeType == 'red13' || themeType == 'blue12' || themeType == 'yellow19', 
							'bg-black3': themeType == 'orange11' || themeType == 'blue14' || themeType == 'yellow13',
							'bg-black15': themeType == 'blue16' || themeType == 'gold12',
							'bg-grey906': themeType == 'gold11' || themeType == 'red12' || themeType == 'blue15' || themeType == 'orange13',
							'bg-black24': themeType == 'purple12' || themeType == 'red11',
							'bg-black29 b-r-6': themeType == 'blue18' || themeType == 'yellow15' || themeType == 'gold13' || themeType == 'yellow21',
							'bg-grey902': !isBlackMode},
							themeType == 'blue18' || themeType == 'yellow15' || themeType == 'gold13' ? 'p-6' : 'p-3']">
						<input type="text" id="keywd" v-model="searchKey" :class="`search-input-box-${themeType}`" :placeholder="themeType == 'blue18' || themeType == 'yellow15' || themeType == 'yellow21' ? '경기명 검색' : 'Enter keyword'" @keydown="onKeyDownSearchKey">
						<button type="button" class="btn btn-sm m-t-m-3 m-l-2" :class="`side-search-btn-${themeType}`" @click="searchGame"><i class="fa fa-search"></i></button>
					</li>
				</ul>
			</div>
			<el-row v-if="themeType == 'yellow18'" class="m-t-16 p-l-8 p-r-8">
				<el-row class="cursor" style="height: 48px; background: #000; color: #fff;" data-toggle="collapse" data-target="#menu-panel" aria-expanded="false" aria-controls="menu-panel">
					<el-col :span="4">
						<img v-if="(layoutType == 'layout5' && showLeftPanel) || layoutType != 'layout5'" 
							:src="`/image/Home/${themeType}/menu.png`" class="m-r-10" width="36">
					</el-col>
					<el-col :span="14" class="m-t-2">
						메뉴
					</el-col>
					<el-col :span="6">
						<img v-if="(layoutType == 'layout5' && showLeftPanel) || layoutType != 'layout5'" 
							:src="`/image/Home/${themeType}/arrow.png`" class="float-right m-t-10" width="15">
					</el-col>
				</el-row>
				<el-row id="menu-panel" class="collapse show">
					<div :class="`sidebar-quick-item-${themeType}`" style="height: 48px; margin-top: 4px;" @click="goToPage('payin')">
						<img :src="`/image/Home/${themeType}/payin.png`" id="img-payin" class="m-r-13" height="22"> 입금
					</div>
					<div :class="`sidebar-quick-item-${themeType}`" style="height: 48px; margin-top: 4px;" @click="goToPage('payout')">
						<img :src="`/image/Home/${themeType}/payout.png`" id="img-payout" class="m-r-13" height="22"> 출금
					</div>
					<div :class="`sidebar-quick-item-${themeType}`" style="height: 48px; margin-top: 4px;" @click="goToPage('note')">
						<img :src="`/image/Home/${themeType}/note.png`" id="img-note" class="m-r-13" height="22">  쪽지함
					</div>
					<div :class="`sidebar-quick-item-${themeType}`" style="height: 48px; margin-top: 4px;" @click="goToPage('customer-center')">
						<img :src="`/image/Home/${themeType}/customer.png`" id="img-customer" class="m-r-13" height="22"> 문의
					</div>
					<div :class="`sidebar-quick-item-${themeType}`" style="height: 48px; margin-top: 4px;" @click="goToPage('bethistory')">
						<img :src="`/image/Home/${themeType}/betting-history.png`" id="img-betting" class="m-r-13" height="22"> 배팅내역
					</div>
					<div :class="`sidebar-quick-item-${themeType}`" style="height: 48px; margin-top: 4px;" @click="goToPage('money-move')">
						<img :src="`/image/Home/${themeType}/moneymove.png`" id="img-moneymove" class="m-r-13" height="22"> 머니이동
					</div>
					<div :class="`sidebar-quick-item-${themeType}`" style="height: 48px; margin-top: 4px;" @click="goToPage('coupon')">
						<img :src="`/image/Home/${themeType}/coupon.png`" id="img-coupon" class="m-r-13" height="22"> 쿠폰/포인트
					</div>
					<div :class="`sidebar-quick-item-${themeType}`" style="height: 48px; margin-top: 4px;" @click="goToPage('notice-rule')">
						<img :src="`/image/Home/${themeType}/notice.png`" id="img-notice" class="m-r-13" height="22"> 공지규정
					</div>
					<div :class="`sidebar-quick-item-${themeType}`" style="height: 48px; margin-top: 4px;" @click="goToPage('event')">
						<img :src="`/image/Home/${themeType}/event.png`" id="img-event" class="m-r-13" height="22"> 이벤트
					</div>
					<div :class="`sidebar-quick-item-${themeType}`" style="height: 48px; margin-top: 4px;" @click="goToPage('attendance')">
						<img :src="`/image/Home/${themeType}/attendance.png`" id="img-attendance" class="m-r-13" height="22"> 출석현황
					</div>
					<div :class="`sidebar-quick-item-${themeType}`" style="height: 48px; margin-top: 4px;" @click="goToPage('friend')">
						<img :src="`/image/Home/${themeType}/friend.png`" id="img-friend" class="m-r-13" height="22"> 지인추천
					</div>
					<div :class="`sidebar-quick-item-${themeType}`" style="height: 48px; margin-top: 4px;" @click="goToPage('fame')">
						<img :src="`/image/Home/${themeType}/fame.png`" class="m-r-13" height="22"> 명예의전당
					</div>
					<div :class="`sidebar-quick-item-${themeType}`" style="height: 48px; margin-top: 4px;" @click="goToPage('tv')">
						<img :src="`/image/Home/${themeType}/tv.png`" class="m-r-13" height="22"> 스포츠중계
					</div>
				</el-row>
			</el-row>
			<el-row v-if="layoutType == 'layout3' || layoutType == 'layout5'" class="m-t-16 p-l-8 p-r-8">
				<el-row v-if="currentUser && isMobile && themeType == 'yellow14'">
					<el-row class="p-4" style="background: #0b0d10; border-radius: 4px;">
					<el-row>
						<el-col :span="12" class="display-center f-s-14 b-r-6 p-8" style="background: #14161b;">
						<el-row>
							<el-row>
							<div :class="userLevelImageList[themeType][currentUser.level - 1].avatar" ></div>
							</el-row>
							<el-row class="text-white f-s-10 text-center">
							LV. {{getLevel()}}
							</el-row>
						</el-row>
						</el-col>
						<el-col :span="12" class="text-right">
						<el-row class="f-s-11 text-grey3">
							ID
						</el-row>
						<el-row class="text-white">
							{{currentUser.userLoginId}}
						</el-row>
						<el-row class="m-t-15 f-s-11 text-grey3">닉네임</el-row>
						<el-row :class="`text-${themeType}`">{{currentUser.nickname}}</el-row>
						</el-col>
					</el-row>
					</el-row>
				</el-row>
				<div v-if="themeType == 'yellow14' && isMobile" :class="`sidebar-quick-item-${themeType}`" class="cursor" style="height: 48px;" @click="goToPage('prematch')">
					<el-col :span="4">
						<img :src="`/image/Home/${themeType}/sports.png`" class="m-r-10" width="28">
					</el-col>
					<el-col :span="20">
						스포츠
					</el-col>
				</div>
				<div v-if="themeType == 'yellow14' && isMobile" :class="`sidebar-quick-item-${themeType}`" class="cursor" style="height: 48px;" @click="goToPage('inplay')">
					<el-col :span="4">
						<img :src="`/image/Home/${themeType}/sports.png`" class="m-r-10" width="28">
					</el-col>
					<el-col :span="20">
						실시간
					</el-col>
				</div>
				<div v-if="(themeType == 'yellow14' || themeType == 'blue13' || themeType == 'gold13' || themeType == 'yellow11') && isMobile" :class="`sidebar-quick-item-${themeType}`" class="cursor" style="height: 48px;" @click="goToPage('mini')">
					<el-col :span="4">
						<img :src="`/image/Home/${themeType}/mini-on.png`" class="m-r-10" width="22">
					</el-col>
					<el-col :span="20">
						미니게임
					</el-col>
				</div>
				<div v-if="(themeType == 'yellow14' || themeType == 'blue13' || themeType == 'gold13' || themeType == 'yellow11') && isMobile" :class="`sidebar-quick-item-${themeType}`" class="cursor" style="height: 48px;" @click="goToPage('virtual')">
					<el-col :span="4">
						<img :src="`/image/Home/${themeType}/virtual-on.png`" class="m-r-10" width="22">
					</el-col>
					<el-col :span="20">
						가상스포츠
					</el-col>
				</div>
				<div v-if="(themeType == 'yellow14' || themeType == 'blue13' || themeType == 'gold13' || themeType == 'yellow11') && isMobile" :class="`sidebar-quick-item-${themeType}`" class="cursor" style="height: 48px;" @click="goToPage('casino')">
					<el-col :span="4">
						<img :src="`/image/Home/${themeType}/casinocash-on.png`" class="m-r-10" width="22">
					</el-col>
					<el-col :span="20">
						카지노
					</el-col>
				</div>
				<el-row v-if="(themeType != 'yellow14') || (themeType == 'yellow14' && !isMobile)" :class="`sidebar-quick-item-${themeType}`" class="cursor" :style="themeType == 'yellow18' ? 'background: #000; color: #fff;' : ''" data-toggle="collapse" data-target="#sports-panel" aria-expanded="false" aria-controls="sports-panel" style="height: 48px;">
					<el-col :span="4">
						<img v-if="(layoutType == 'layout5' && showLeftPanel) || layoutType != 'layout5'" 
							:src="`/image/Home/${themeType}/sports.png`" class="m-r-10" width="36">
					</el-col>
					<el-col :span="14">
						{{ (layoutType == 'layout5' && showLeftPanel) || layoutType != 'layout5' ? '스포츠' : ''}}
					</el-col>
					<el-col :span="6">
						<img v-if="(layoutType == 'layout5' && showLeftPanel) || layoutType != 'layout5'" 
							:src="`/image/Home/${themeType}/arrow.png`" class="float-right m-t-10" width="15">
					</el-col>
				</el-row>
			</el-row>
			<!-- 리그리스트 -->
			<div v-if="(themeType != 'yellow14') || (themeType == 'yellow14' && !isMobile)" class="panel-body p-0 m-0" 
				:class="{ 'bg-black': layoutType == 'layout1', 'sidebar-bg-orange12 p-l-8 p-r-8': layoutType == 'layout2'}">
				<ul class="nav" :id="layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6' ? 'sports-panel' : ''" :class="{'collapse show p-l-8 p-r-8': layoutType == 'layout3' || layoutType == 'layout5', 'p-l-12 p-r-12 p-t-6': layoutType == 'layout6'}">
					<div v-if="themeType == 'yellow18'" class="panel-heading p-0 m-0">
						<ul class="nav p-t`1-2">
							<li class="p-3">
								<input type="text" id="keywd" v-model="searchKey" :class="`search-input-box-${themeType}`" placeholder="Enter keyword" @keydown="onKeyDownSearchKey">
								<button type="button" class="btn btn-sm m-t-m-3 m-l-2" :class="`side-search-btn-${themeType}`" @click="searchGame"><i class="fa fa-search"></i></button>
							</li>
						</ul>
					</div>
					<!-- 오늘의 경기 -->
					<li v-if="themeType == 'orange11' || themeType == 'yellow13' || themeType == 'blue18'" class="has-sub cursor" :class="themeType == 'blue18' ? 'bg-black29 b-r-6' : 'bg-black3'" @click="onClickTodayGame">
						<a class="p-l-13 p-r-10" :class="{'today-game': themeType == 'blue18'}" style="border-bottom: 0">
							<i v-if="layoutType != 'layout6'" class="sport-icon upcoming-games width-23 m-r-5"></i>
							<span class="text-white p-2"> 오늘의 경기 :: {{today}} {{layoutType != 'layout6' ? '(+α)' : ''}}</span>
							<img v-if="layoutType == 'layout6'" :src="`image/Home/${themeType}/arrow1.png`" class="float-right" width="20">
						</a>
					</li>
					<!-- 오늘의 경기 끝 -->
					<!-- 탭 -->
					<li v-if="themeType == 'blue16' || themeType == 'blue18' || themeType == 'yellow15' || themeType == 'yellow18' || themeType == 'blue13' || themeType == 'gold13' || themeType == 'yellow11'" class="has-sub cursor" :style="themeType == 'blue16' ? 'border-bottom: 2px solid #000' : ''">
						<el-row class="height-42">
							<el-col :span="12" class="height-full">
								<div :class="[{'on': categoryType == 'prematch'}, `right-bar-sports-tab-${themeType}`]" 
									@click="onClickSportsTypeTab('prematch')">
									<div class="float-left" style="margin-left: 45px; margin-right: 5px">
										<img v-show="categoryType == 'prematch'" :src="`/image/Sidebar/${themeType}/SportsOn.png`">
										<img v-show="categoryType == 'inplay'" :src="`/image/Sidebar/${themeType}/SportsOff.png`">
									</div>
									<div class="float-left m-t-2">
										스포츠
									</div>
								</div>
							</el-col>
							<el-col :span="12" class="height-full">
								<div :class="[{'on': categoryType == 'inplay'}, `right-bar-sports-tab-${themeType}`]"
									@click="onClickSportsTypeTab('inplay')">
									<div class="float-left" style="margin-left: 45px; margin-right: 5px">
										<img v-show="categoryType == 'prematch'" :src="`/image/Sidebar/${themeType}/SportsLiveOff.png`">
										<img v-show="categoryType == 'inplay'" :src="`/image/Sidebar/${themeType}/SportsLiveOn.png`">
									</div>
									<div class="float-left m-t-2">
										실시간
									</div>
									<div v-if="layoutType == 'layout6' || layoutType == 'yellow18' || themeType == 'blue13' || themeType == 'gold13' || themeType == 'yellow11'" style="float: left; padding: 2px; margin-left: 6px; color: #fff; border-radius: 3px; background: #ff0000;">LIVE</div>
								</div>
							</el-col>
						</el-row>
					</li>
					<!-- 탭 끝 -->
					<!-- 즐겨찾기 -->
					<li v-if="layoutType == 'layout6' && categoryType == 'prematch'" class="has-sub cursor">
						<a class="p-l-13 p-r-10 height-48 f-s-12 bg-category-blue18" data-toggle="collapse" data-target="#favorite-panel" aria-expanded="false" aria-controls="favorite-panel">
							<el-row>
								<el-col :span="4" class="pull-right label f-s-12 f-w-100 p-t-5 p-b-5 m-t-1">
									{{favorite.length}}
								</el-col>
								<el-col :span="3">
									<img :src="`/image/Sports/Category/${themeType}/Favorite.png`" width="28">
								</el-col>
								<el-col :span="17" class="text-white p-3 p-t-2">
									즐겨찾기
								</el-col>
							</el-row>
						</a>
						<el-row class="bg-black29 b-r-6 collapse" id="favorite-panel">
							<el-row v-for="(league, index) in favorite" :key="index" class="cat-top-game">
								<div class="width-full display-inlineblock" @click="onSelectTopLeague(league.SportId, league.LocationId, league.LeagueId)">
									<div class="float-left word-keep" style="max-width: 80%">
										<div class="width-full text-overflow"><i class="flag-icon flag-icon-fr"></i> {{league.Name}} </div>
									</div>
									<div :class="themeType == 'orange11' ? 'sports-favorite-orange11-on' : 'sports-favorite-blue-on'" @click="onClickDeleteFavorite(league._id)"></div>
								</div>
							</el-row>
						</el-row>
						<a class="p-l-13 p-r-10 height-48 f-s-12 bg-category-blue18" data-toggle="collapse" data-target="#game-panel" aria-expanded="false" aria-controls="game-panel">
							<el-row>
								<el-col :span="4" class="pull-right label f-s-12 f-w-100 p-t-5 p-b-5 m-t-1">
								</el-col>
								<el-col :span="3">
									<img :src="`/image/Sports/Category/${themeType}/top.png`" width="28">
								</el-col>
								<el-col :span="17" class="text-white p-3 p-t-2">
									인기경기 TOP 5
								</el-col>
							</el-row>
						</a>
						<el-row class="bg-black29 b-r-6 collapse" id="game-panel">
							<el-row v-for="(game, index) in topGameList" :key="index" class="cat-top-game">
								<div @click="onSelectTopGame(game)">
									<img :src="`/image/Sports/Category/${themeType}/${game.Fixture.Sport.Id}.png`" width="22" class="m-r-8">
									{{game.Fixture.Participants[0].Name}} VS {{game.Fixture.Participants[1].Name}}
								</div>
							</el-row>
						</el-row>
						<a class="p-l-13 p-r-10 height-48 f-s-12 bg-category-blue18" data-toggle="collapse" data-target="#league-panel" aria-expanded="false" aria-controls="league-panel">
							<el-row>
								<el-col :span="4" class="pull-right label f-s-12 f-w-100 p-t-5 p-b-5 m-t-1">
								</el-col>
								<el-col :span="3">
									<img :src="`/image/Sports/Category/${themeType}/top.png`" width="28">
								</el-col>
								<el-col :span="17" class="text-white p-3 p-t-2">
									인기리그 TOP 5
								</el-col>
							</el-row>
						</a>
						<el-row class="bg-black29 b-r-6 collapse" id="league-panel">
							<el-row v-for="(league, index) in topLeagueList" :key="index" class="cat-top-game">
								<div @click="onSelectTopLeague(league.SportId, league.LocationId, league.Id)">
									<img v-if="league.ImageUrl" class="float-left height-23 m-r-8" :src="filterEmblem(league.ImageUrl)">
									{{league.Name}}
								</div>
							</el-row>
						</el-row>
					</li>
					<!-- 즐겨찾기 끝 -->
					<li v-if="categoryType == 'prematch'" v-for="(sportsType, index) in prematchCategory" :key="index" class="has-sub cursor" 
						:class="{'b-r-6 overflow-hidden': layoutType == 'layout2' || layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6', 'on': selectedSportsTypeId == sportsType.Id}">
						<a class="p-l-13 p-r-10 f-s-12" :class="[`bg-category-${themeType}`, {'height-42': layoutType == 'layout1', 'on': selectedSportsTypeId == sportsType.Id}]" @click="onSelectSportsType(sportsType.Id)">
							<el-row style="white-space: nowrap;">
								<el-col v-if="showLeftPanel" :span="4" class="pull-right label f-s-12 f-w-100 m-t-1 p-t-5 p-b-5 category-count p-0">
									{{sportsType.Count}}
								</el-col>
								<el-col :span="3">
									<img :src="`/image/Sports/Category/${themeType}/${sportsType.Id}.png`" :width="layoutType == 'layout2' ? 16 : 22">
								</el-col>
								<el-col v-if="showLeftPanel" :span="17" class="p-3 p-t-2">
									{{sportsType.Name}}
								</el-col>
							</el-row>
						</a>
						<ul v-show="selectedSportsTypeId == sportsType.Id" class="sports-category sub-menu p-t-0" 
							:class="{
								'p-b-2': layoutType == 'layout1', 
								'bg-grey903': !isBlackMode, 
								'b-r-6 overflow-hidden': (layoutType == 'layout3' && themeType != 'yellow21') || layoutType == 'layout5' || layoutType == 'layout6', 
								'bg-grey-blue16': themeType == 'red15', 
								'bg-black23': themeType == 'orange13', 
								'p-0': layoutType == 'layout2' || layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6'
							}">
							<li v-for="(location, index) in sportsType.Locations" :key="index" class="has-sub" :style="selectedLocationId == location.Id ? 'background: #292C30; border-radius: 6px;' : ''">
								<a @click="onSelectLocation(location.Id)" :class="[`bg-location-${themeType}`, {'on': selectedLocationId == location.Id}]">
									<el-row :class="layoutType == 'layout2' || layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6' ? 'p-12 p-l-8 p-r-8' : 'p-t-4 p-b-4 p-l-10 p-r-10'">
										<span class="pull-right label label-black f-s-11 f-w-100 m-t-1 width-35" :class="`cat-count-${themeType}`">{{location.Count}}</span>
										<div class="p-2">
											<img :src="sportsAPI ? '/image/Sports/flags/matrix/' + location.Id + '.png' : '/image/Sports/flags/' + location.Id + '.png'" width="20" style="margin-top: -3px;"> {{location.Name}}
										</div>
									</el-row>
								</a>
								<el-row :class="{'p-l-16 p-r-16 bg-black29': (layoutType == 'layout3' && themeType != 'yellow21' && themeType != 'yellow16' && themeType != 'blue13' && themeType != 'gold13' && themeType != 'yellow11' && themeType != 'yellow14') || layoutType == 'layout5' || layoutType == 'layout6', 'p-l-16 p-r-16 bg-yellow900': layoutType == 'layout3' && themeType == 'yellow21', 'p-l-16 p-r-16 bg-black38': layoutType == 'layout3' && themeType == 'yellow16', 'p-l-16 p-r-16 bg-black29': themeType == 'blue13' || themeType == 'gold13', 'p-l-16 p-r-16 bg-black32': themeType == 'yellow14' || themeType == 'yellow11'}">
									<ul v-show="selectedLocationId == location.Id" class="sports-category sub-menu" 
										:class="[
											!isBlackMode ? 'bg-grey905' : 
											layoutType == 'layout2' ? 'bg-grey922' : 
											layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6' ? 'bg-black29 b-r-6 overflow-hidden' : 'bg-black']">
										<li v-for="(league, index) in location.Leagues" :key="index" class="has-sub">
											<a :class="[layoutType == 'layout2' || layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6' ? 'p-t-12 p-b-12' : 'p-t-4 p-b-4', `bg-league-${themeType}`]" @click="onSelectLeague(league.Id)">
												<span class="pull-right label label-black f-s-11 f-w-100 m-t-1 width-35" :class="`cat-count-${themeType}`">{{league.Count}}</span>
												<div style="width:80%;">
													<div class="p-2 width-full text-overflow"><i v-if="layoutType != 'layout2'" class="fa fa-chevron-right f-s-9 m-r-5"></i>{{league.Name}}</div>
												</div>
											</a>
										</li>
									</ul>
								</el-row>
							</li>
						</ul>
					</li>
					<li v-if="categoryType == 'inplay'" v-for="(sportsType, index) in inplayCategory" :key="index" class="has-sub cursor">
						<a class="p-l-13 p-r-10 f-s-12" :class="[`bg-category-${themeType}`, {'height-42': layoutType == 'layout1', 'on': selectedSportsTypeId == sportsType.Id}]" @click="onSelectSportsType(sportsType.Id)">
							<el-row>
								<el-col :span="4" class="pull-right label f-s-12 f-w-100 m-t-1 p-t-5 p-b-5 category-count">
									{{sportsType.Count}}
								</el-col>
								<el-col :span="3">
									<img :src="`/image/Sports/Category/${themeType}/${sportsType.Id}.png`" width="22">
								</el-col>
								<el-col :span="17" class="p-3 p-t-2" :class="`text-contrast-${themeType}`">
									{{sportsType.Name}}
								</el-col>
							</el-row>
						</a>
						<ul v-show="selectedSportsTypeId == sportsType.Id" class="sports-category sub-menu p-t-0" 
							:class="{
								'p-b-2': layoutType == 'layout1', 
								'bg-grey903': !isBlackMode, 
								'b-r-6 overflow-hidden': (layoutType == 'layout3' && themeType != 'yellow21') || layoutType == 'layout5' || layoutType == 'layout6',
								'bg-grey-blue16': themeType == 'red15', 
								'bg-black23': themeType == 'orange13', 
								'p-0': layoutType == 'layout2' || layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6'
							}">
							<li v-for="(location, index) in sportsType.Locations" :key="index" class="has-sub" :style="selectedLocationId == location.Id ? 'background: #292C30; border-radius: 6px;' : ''">
								<a @click="onSelectLocation(location.Id)" :class="[`bg-location-${themeType}`, {'on': selectedLocationId == location.Id}]">
									<el-row :class="layoutType == 'layout2' || layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6' ? 'p-12 p-l-8 p-r-8' : 'p-t-4 p-b-4 p-l-10 p-r-10'">
										<span class="pull-right label label-black f-s-11 f-w-100 m-t-1 width-35" :class="`cat-count-${themeType}`">{{location.Count}}</span>
										<div class="p-2">
											<img :src="sportsAPI ? '/image/Sports/flags/matrix/' + location.Id + '.png' : '/image/Sports/flags/' + location.Id + '.png'" width="20" style="margin-top: -3px;"> {{location.Name}}
										</div>
									</el-row>
								</a>
								<el-row :class="{'p-l-16 p-r-16 bg-black29': (layoutType == 'layout3' && themeType != 'yellow21') || layoutType == 'layout5' || layoutType == 'layout6', 'p-l-16 p-r-16 bg-yellow900': layoutType == 'layout3' && themeType == 'yellow21'}">
									<ul v-show="selectedLocationId == location.Id" class="sports-category sub-menu" 
										:class="[!isBlackMode ? 'bg-grey905' : layoutType == 'layout2' ? 'bg-grey922' : layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6' ? 'bg-black29 b-r-6 overflow-hidden' : 'bg-black']">
										<li v-for="(league, index) in location.Leagues" :key="index" class="has-sub">
											<a :class="[layoutType == 'layout2' || layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6' ? 'p-t-12 p-b-12' : 'p-t-4 p-b-4', `bg-league-${themeType}`]" @click="onSelectLeague(league.Id)">
												<span class="pull-right label label-black f-s-11 f-w-100 m-t-1 width-35"  :class="`cat-count-${themeType}`">{{league.Count}}</span>
												<div style="width:80%;">
													<div class="p-2 width-full text-overflow"><i class="fa fa-chevron-right f-s-9 m-r-5"></i>{{league.Name}}</div>
												</div>
											</a>
										</li>
									</ul>
								</el-row>
							</li>
						</ul>
					</li>
					<li v-if="themeType == 'orange11' || themeType == 'yellow13'" class="p-4 bg-black3"></li>
				</ul>
			</div>
			<!-- 리그리스트 끝 -->
			<el-row v-if="(layoutType == 'layout3' && themeType != 'yellow18' && themeType != 'blue13' && themeType != 'gold13' && themeType != 'yellow11' && themeType != 'yellow14') || layoutType == 'layout5'" class="text-white f-s-14 p-l-8 p-r-8">
				<div v-if="layoutType == 'layout2'" class="f-w-900 m-t-8" style="padding: 12px 8px; white-space: nowrap;">
					{{showLeftPanel ? '최신 인기리그' : ' '}}
				</div>
				<div v-if="layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6'" :class="`sidebar-quick-item-${themeType}`" class="m-t-8" 
					style="padding: 12px 8px; white-space: nowrap; height: 48px;" data-toggle="collapse" data-target="#league-panel" aria-expanded="false" aria-controls="league-panel">
					<el-col :span="4">
						<img v-if="(layoutType == 'layout5' && showLeftPanel) || layoutType != 'layout5'" :src="`/image/Home/${themeType}/league.png`" class="m-r-10" width="36">
					</el-col>
					<el-col :span="14">
						{{showLeftPanel ? '인기리그' : ' '}}
					</el-col>
					<el-col :span="6">
						<img v-if="(layoutType == 'layout5' && showLeftPanel) || layoutType != 'layout5'" :src="`/image/Home/${themeType}/arrow.png`" class="float-right m-t-10" width="15">
					</el-col>
				</div>
				<el-row :id="layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6' ? 'league-panel' : ''" :class="{'collapse show': layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6'}">
					<div v-for="(league, index) in topLeagueList" :key="index" :class="`sidebar-quick-item-${themeType}`" @click="onSelectTopLeague(league.SportId, league.LocationId, league.Id)">
						<div class="float-left width-16 p-l-2">
							<img v-if="league.ImageUrl" class="float-left" width="100%" :src="filterEmblem(league.ImageUrl)">
						</div>
						<div v-if="showLeftPanel" class="sidebar-quick-item-text" style="white-space: nowrap;">
							{{league.Name}}
						</div>
					</div>
				</el-row>
			</el-row>
			<!-- 최신 인기게임 -->
			<div v-if="layoutType == 'layout1'" class="f-s-13 m-b-9 m-t-9 border-radius-5 p-b-5 display-inlineblock width-98pro back" 
				:class="[`favorite-${themeType}`, {'m-l-3 m-r-3 p-l-5 p-r-5': themeType != 'red13' && themeType != 'blue12' && themeType != 'yellow19'}]">
				<el-row>
					<el-row class="text-center p-t-11 p-b-11 top">
						<img :src="`/image/Sports/${themeType}/cup.png`" class="float-left" :class="themeType == 'red15' || themeType == 'red14' || themeType == 'yellow12' || themeType == 'red12' || themeType == 'blue15' || themeType == 'red11' || themeType == 'blue14' || themeType == 'white' || themeType == 'gold11' || themeType == 'purple11' || themeType == 'red13' || themeType == 'blue12' || themeType == 'yellow19' || themeType == 'purple12' || themeType == 'blue16' || themeType == 'gold12' || themeType == 'blue17' || themeType == 'orange14' || themeType == 'orange13' ? 'm-l-10 m-r-10' : ' m-l-80 m-r-10'">
						<span class="float-left">최신 인기게임</span>
						<img v-if="themeType == 'red15' || themeType == 'red14' || themeType == 'yellow12' || themeType == 'blue14' || themeType == 'white' || themeType == 'gold11' || themeType == 'purple11' || themeType == 'red13' || themeType == 'blue12' || themeType == 'yellow19' || themeType == 'purple12' || themeType == 'blue16' || themeType == 'gold12' || themeType == 'blue17' || themeType == 'orange14'"  :src="`/image/Sidebar/${themeType}/down.png`" class="float-right m-r-10 m-t-5">
					</el-row>
					<el-row v-for="(game, index) in topGameList" :key="index" class="p-t-10 p-b-10 m-b-1 p-l-16 p-r-16 cursor item">
						<div @click="onSelectTopGame(game)">
							<el-col :span="4" class="p-t-9 time">
								<span>{{parseTime(game.Fixture.StartDate, '{h}:{i}')}}</span>
							</el-col>
							<el-col :span="4" class="p-l-5">
								<img :src="`/image/Sports/Category/${themeType}/${game.Fixture.Sport.Id}.png`" width="22" class="m-t-8">
							</el-col>
							<el-col :span="16" class="name">
								<el-row class="text-overflow">
									<img v-if="game.Fixture.Participants[0].ImageUrl" :src="filterEmblem(game.Fixture.Participants[0].ImageUrl)" height="18" width="18" class="m-r-5 float-left">
									<div class="float-left">{{game.Fixture.Participants[0].Name}}</div>
								</el-row>
								<el-row class="text-overflow">
									<img v-if="game.Fixture.Participants[1].ImageUrl" :src="filterEmblem(game.Fixture.Participants[1].ImageUrl)" height="18" width="18" class="m-r-5 float-left">
									<div class="float-left">{{game.Fixture.Participants[1].Name}}</div>
								</el-row>
							</el-col>
						</div>
					</el-row>
				</el-row>
			</div>
			<!-- 최신 인기게임 끝 -->
			<!-- 최신 인기리그 -->
			<div v-if="layoutType == 'layout1'" class="f-s-13 m-b-9 border-radius-5 p-b-5 display-inlineblock width-98pro back" :class="[`favorite-${themeType}`, {'m-l-3 m-r-3 p-l-5 p-r-5': themeType != 'red13' && themeType != 'blue12' && themeType != 'yellow19'}]">
				<el-row>
					<el-row class="text-center p-t-11 p-b-11 top">
						<img :src="`/image/Sports/${themeType}/top.png`" class="float-left" :class="themeType == 'red15' || themeType == 'gold11' || themeType == 'red14' || themeType == 'yellow12' || themeType == 'red12' || themeType == 'blue15' || themeType == 'red11' || themeType == 'blue14' || themeType == 'white' || themeType == 'purple11' || themeType == 'red13' || themeType == 'blue12' || themeType == 'yellow19' || themeType == 'purple12' || themeType == 'blue16' || themeType == 'gold12' || themeType == 'blue17' || themeType == 'orange14' || themeType == 'orange13' ? 'm-l-10 m-r-10' : ' m-l-80 m-r-10'">
						<span class="float-left">최신 인기리그</span>
						<img v-if="themeType == 'red15' || themeType == 'gold11' || themeType == 'red14' || themeType == 'yellow12' || themeType == 'blue14' || themeType == 'white' || themeType == 'purple11' || themeType == 'red13' || themeType == 'blue12' || themeType == 'yellow19' || themeType == 'purple12' || themeType == 'gold12' || themeType == 'blue17' || themeType == 'orange14'" :src="`/image/Sidebar/${themeType}/down.png`" class="float-right m-r-10 m-t-5">
					</el-row>
					<el-row v-for="(league, index) in topLeagueList" :key="index" class="p-t-10 p-b-10 m-b-1 text-white p-l-16 p-r-16 cursor item">
						<div @click="onSelectTopLeague(league.SportId, league.LocationId, league.Id)">
							<el-col :span="5">
								<img :src="`/image/Sports/Category/${themeType}/${league.SportId}.png`" width="22">
							</el-col>
							<el-col :span="3">
								<img v-if="league.ImageUrl" class="float-left height-23" :src="filterEmblem(league.ImageUrl)">
							</el-col>
							<el-col :span="16">
								<span class="float-left m-t-1 text-overflow width-full name">
									{{league.Name}}
								</span>
							</el-col>
						</div>
					</el-row>
				</el-row>
			</div>
			<!-- 최신 인기리그 끝 -->
		</el-row>
		<el-row v-else>
			<el-row v-if="layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6'" class="m-t-16">
				<el-row :class="`sidebar-quick-item-${themeType}`" data-toggle="collapse" data-target="#clive-panel" aria-expanded="false" aria-controls="clive-panel" style="height: 48px;">
					<el-col :span="4">
						<img :src="`/image/Home/${themeType}/CASINO-MENU.png`" class="m-r-10" width="36">
					</el-col>
					<el-col :span="14">
						{{ (layoutType == 'layout5' && showLeftPanel) || layoutType != 'layout5' ? '카지노' : ''}}
					</el-col>
					<el-col :span="6">
						<img v-if="(layoutType == 'layout5' && showLeftPanel) || layoutType != 'layout5'" 
							:src="`/image/Home/${themeType}/arrow.png`" class="float-right m-t-10" width="15">
					</el-col>
				</el-row>
				<el-row id="clive-panel" class="collapse show p-l-8 p-r-8">
					<div :class="showLeftPanel ? `sidebar-quick-citem-${themeType}` : 'sidebar-quick-citem-none'" @click="onSelectGame(77, 0, true)">
						<img v-if="!showLeftPanel" :src="`/image/Home/${themeType}/point.png`">
						<div v-if="showLeftPanel" class="item-image">
							<img height="20px" :src="'/image/bottom/black/Evolution.png'">
						</div>
						<div v-if="showLeftPanel" class="item-text">
							에볼루션 게이밍
						</div>
					</div>
					<div :class="showLeftPanel ? `sidebar-quick-citem-${themeType}` : 'sidebar-quick-citem-none'" @click="onSelectGame(71, 0, true)">
						<img v-if="!showLeftPanel" :src="`/image/Home/${themeType}/point.png`">
						<div v-if="showLeftPanel" class="item-image">
							<img height="20px" :src="'/image/bottom/black/Asia.png'">
						</div>
						<div v-if="showLeftPanel" class="item-text">
							아시아 게이밍
						</div>
					</div>
					<div :class="showLeftPanel ? `sidebar-quick-citem-${themeType}` : 'sidebar-quick-citem-none'" @click="onSelectGame(1, 0, true)">
						<img v-if="!showLeftPanel" :src="`/image/Home/${themeType}/point.png`">
						<div v-if="showLeftPanel" class="item-image">
							<img height="20px" :src="'/image/bottom/black/Vivo.png'">
						</div>
						<div v-if="showLeftPanel" class="item-text">
							비보 게이밍
						</div>
					</div>
					<div :class="showLeftPanel ? `sidebar-quick-citem-${themeType}` : 'sidebar-quick-citem-none'" @click="onSelectGame(69, 0, true)">
						<img v-if="!showLeftPanel" :src="`/image/Home/${themeType}/point.png`">
						<div v-if="showLeftPanel" class="item-image">
							<img height="20px" :src="'/image/bottom/black/Micro.png'">
						</div>
						<div v-if="showLeftPanel" class="item-text">
							마이크로 게이밍
						</div>
					</div>
					<div :class="showLeftPanel ? `sidebar-quick-citem-${themeType}` : 'sidebar-quick-citem-none'" @click="onSelectGame(9, 0, true)">
						<img v-if="!showLeftPanel" :src="`/image/Home/${themeType}/point.png`">
						<div v-if="showLeftPanel" class="item-image">
							<img height="20px" :src="'/image/bottom/black/Oriental.png'">
						</div>
						<div v-if="showLeftPanel" class="item-text">
							오리엔탈 게이밍
						</div>
					</div>
					<div :class="showLeftPanel ? `sidebar-quick-citem-${themeType}` : 'sidebar-quick-citem-none'" @click="onSelectGame(28, 0, true)">
						<img v-if="!showLeftPanel" :src="`/image/Home/${themeType}/point.png`">
						<div v-if="showLeftPanel" class="item-image">
							<img height="20px" :src="'/image/bottom/black/Dream.png'">
						</div>
						<div v-if="showLeftPanel" class="item-text">
							드림 게이밍
						</div>
					</div>
					<div :class="showLeftPanel ? `sidebar-quick-citem-${themeType}` : 'sidebar-quick-citem-none'" @click="onSelectGame(5, 0, true)">
						<img v-if="!showLeftPanel" :src="`/image/Home/${themeType}/point.png`">
						<div v-if="showLeftPanel" class="item-image">
							<img height="20px" :src="'/image/bottom/black/Sexy.png'">
						</div>
						<div v-if="showLeftPanel" class="item-text">
							섹시 게이밍
						</div>
					</div>
					<div :class="showLeftPanel ? `sidebar-quick-citem-${themeType}` : 'sidebar-quick-citem-none'" @click="onSelectGame(62, 0, true)">
						<img v-if="!showLeftPanel" :src="`/image/Home/${themeType}/point.png`">
						<div v-if="showLeftPanel" class="item-image">
							<img height="20px" :src="'/image/bottom/black/Taishan.png'">
						</div>
						<div v-if="showLeftPanel" class="item-text">
							타이샨
						</div>
					</div>
					<div :class="showLeftPanel ? `sidebar-quick-citem-${themeType}` : 'sidebar-quick-citem-none'" @click="onSelectGame(15, 0, true)">
						<img v-if="!showLeftPanel" :src="`/image/Home/${themeType}/point.png`">
						<div v-if="showLeftPanel" class="item-image">
							<img height="20px" :src="'/image/bottom/black/bbin.png'">
						</div>
						<div v-if="showLeftPanel" class="item-text">
							BBIN 게이밍
						</div>
					</div>
					<div :class="showLeftPanel ? `sidebar-quick-citem-${themeType}` : 'sidebar-quick-citem-none'" @click="onSelectGame(4, 0, true)">
						<img v-if="!showLeftPanel" :src="`/image/Home/${themeType}/point.png`">
						<div v-if="showLeftPanel" class="item-image">
							<img height="20px" :src="'/image/bottom/black/allbet-casino.png'">
						</div>
						<div v-if="showLeftPanel" class="item-text">
							올벳 게이밍
						</div>
					</div>
					<div :class="showLeftPanel ? `sidebar-quick-citem-${themeType}` : 'sidebar-quick-citem-none'" @click="onSelectGame(66, 0, true)">
						<img v-if="!showLeftPanel" :src="`/image/Home/${themeType}/point.png`">
						<div v-if="showLeftPanel" class="item-image">
							<img height="20px" :src="'/image/bottom/black/better-live-casino.png'">
						</div>
						<div v-if="showLeftPanel" class="item-text">
							베터라이브 게이밍
						</div>
					</div>
					<div :class="showLeftPanel ? `sidebar-quick-citem-${themeType}` : 'sidebar-quick-citem-none'" @click="onSelectGame(63, 0, true)">
						<img v-if="!showLeftPanel" :src="`/image/Home/${themeType}/point.png`">
						<div v-if="showLeftPanel" class="item-image">
							<img height="20px" :src="'/image/bottom/black/dowinn-casino.png'">
						</div>
						<div v-if="showLeftPanel" class="item-text">
							두윈 게이밍
						</div>
					</div>
					<div :class="showLeftPanel ? `sidebar-quick-citem-${themeType}` : 'sidebar-quick-citem-none'" @click="onSelectGame(61, 0, true)">
						<img v-if="!showLeftPanel" :src="`/image/Home/${themeType}/point.png`">
						<div v-if="showLeftPanel" class="item-image">
							<img height="20px" :src="'/image/bottom/black/motivaiton-casino.png'">
						</div>
						<div v-if="showLeftPanel" class="item-text">
							모티베이션 게이밍
						</div>
					</div>
					<div :class="showLeftPanel ? `sidebar-quick-citem-${themeType}` : 'sidebar-quick-citem-none'" @click="onSelectGame(73, 0, true)">
						<img v-if="!showLeftPanel" :src="`/image/Home/${themeType}/point.png`">
						<div v-if="showLeftPanel" class="item-image">
							<img height="20px" :src="'/image/bottom/black/Prag.png'">
						</div>
						<div v-if="showLeftPanel" class="item-text">
							프래그매틱 게이밍
						</div>
					</div>
					<div :class="showLeftPanel ? `sidebar-quick-citem-${themeType}` : 'sidebar-quick-citem-none'" @click="onSelectGame(53, 0, true)">
						<img v-if="!showLeftPanel" :src="`/image/Home/${themeType}/point.png`">
						<div v-if="showLeftPanel" class="item-image">
							<img height="20px" :src="'/image/bottom/black/skywind-casino.png'">
						</div>
						<div v-if="showLeftPanel" class="item-text">
							스카이윈드 게이밍
						</div>
					</div>
					<div :class="showLeftPanel ? `sidebar-quick-citem-${themeType}` : 'sidebar-quick-citem-none'" @click="onSelectGame(12, 0, true)">
						<img v-if="!showLeftPanel" :src="`/image/Home/${themeType}/point.png`">
						<div v-if="showLeftPanel" class="item-image">
							<img height="20px" :src="'/image/bottom/black/wm-casino.png'">
						</div>
						<div v-if="showLeftPanel" class="item-text">
							WM 게이밍
						</div>
					</div>
				</el-row>
				<el-row :class="`sidebar-quick-item-${themeType}`" data-toggle="collapse" data-target="#cslot-panel" aria-expanded="false" aria-controls="cslot-panel" style="height: 48px;">
					<el-col :span="4">
						<img :src="`/image/Home/${themeType}/SLOT-MENU.png`" class="m-r-10" width="36">
					</el-col>
					<el-col :span="14">
						{{ (layoutType == 'layout5' && showLeftPanel) || layoutType != 'layout5' ? '슬롯' : ''}}
					</el-col>
					<el-col :span="6">
						<img v-if="(layoutType == 'layout5' && showLeftPanel) || layoutType != 'layout5'" 
							:src="`/image/Home/${themeType}/arrow.png`" class="float-right m-t-10" width="15">
					</el-col>
				</el-row>
				<el-row id="cslot-panel" class="collapse show p-l-8 p-r-8">
					<div :class="showLeftPanel ? `sidebar-quick-citem-${themeType}` : 'sidebar-quick-citem-none'" @click="goToPage('casino', 8)">
						<img v-if="!showLeftPanel" :src="`/image/Home/${themeType}/point.png`">
						<div v-if="showLeftPanel" class="item-image">
							<img height="20px" :src="'/image/bottom/black/Prag.png'">
						</div>
						<div v-if="showLeftPanel" class="item-text">
							프라그마틱 플레이
						</div>
					</div>
					<div :class="showLeftPanel ? `sidebar-quick-citem-${themeType}` : 'sidebar-quick-citem-none'" @click="goToPage('casino', 21)">
						<img v-if="!showLeftPanel" :src="`/image/Home/${themeType}/point.png`">
						<div v-if="showLeftPanel" class="item-image">
							<img height="20px" :src="'/image/bottom/black/Micro.png'">
						</div>
						<div v-if="showLeftPanel" class="item-text">
							마이크로 게이밍 - 슬롯
						</div>
					</div>
					<div :class="showLeftPanel ? `sidebar-quick-citem-${themeType}` : 'sidebar-quick-citem-none'" @click="goToPage('casino', 23)">
						<img v-if="!showLeftPanel" :src="`/image/Home/${themeType}/point.png`">
						<div v-if="showLeftPanel" class="item-image">
							<img height="20px" :src="'/image/bottom/black/cq9.png'">
						</div>
						<div v-if="showLeftPanel" class="item-text">
							CQ9
						</div>
					</div>
					<div :class="showLeftPanel ? `sidebar-quick-citem-${themeType}` : 'sidebar-quick-citem-none'" @click="goToPage('casino', 30)">
						<img v-if="!showLeftPanel" :src="`/image/Home/${themeType}/point.png`">
						<div v-if="showLeftPanel" class="item-image">
							<img height="20px" :src="'/image/bottom/black/Game.png'">
						</div>
						<div v-if="showLeftPanel" class="item-text">
							게임아트
						</div>
					</div>
					<div :class="showLeftPanel ? `sidebar-quick-citem-${themeType}` : 'sidebar-quick-citem-none'" @click="goToPage('casino', 51)">
						<img v-if="!showLeftPanel" :src="`/image/Home/${themeType}/point.png`">
						<div v-if="showLeftPanel" class="item-image">
							<img height="20px" :src="'/image/bottom/black/playstar.png'">
						</div>
						<div v-if="showLeftPanel" class="item-text">
							플레이스타
						</div>
					</div>
					<div :class="showLeftPanel ? `sidebar-quick-citem-${themeType}` : 'sidebar-quick-citem-none'" @click="goToPage('casino', 24)">
						<img v-if="!showLeftPanel" :src="`/image/Home/${themeType}/point.png`">
						<div v-if="showLeftPanel" class="item-image">
							<img height="20px" :src="'/image/bottom/black/Haba.png'">
						</div>
						<div v-if="showLeftPanel" class="item-text">
							하바네로
						</div>
					</div>
					<div :class="showLeftPanel ? `sidebar-quick-citem-${themeType}` : 'sidebar-quick-citem-none'" @click="goToPage('casino', 37)">
						<img v-if="!showLeftPanel" :src="`/image/Home/${themeType}/point.png`">
						<div v-if="showLeftPanel" class="item-image">
							<img height="20px" :src="'/image/bottom/black/boongo.png'">
						</div>
						<div v-if="showLeftPanel" class="item-text">
							부운고
						</div>
					</div>
					<div :class="showLeftPanel ? `sidebar-quick-citem-${themeType}` : 'sidebar-quick-citem-none'" @click="goToPage('casino', 40)">
						<img v-if="!showLeftPanel" :src="`/image/Home/${themeType}/point.png`">
						<div v-if="showLeftPanel" class="item-image">
							<img height="20px" :src="'/image/bottom/black/Evo.png'">
						</div>
						<div v-if="showLeftPanel" class="item-text">
							에보플레이
						</div>
					</div>
					<div :class="showLeftPanel ? `sidebar-quick-citem-${themeType}` : 'sidebar-quick-citem-none'" @click="goToPage('casino', 51)">
						<img v-if="!showLeftPanel" :src="`/image/Home/${themeType}/point.png`">
						<div v-if="showLeftPanel" class="item-image">
							<img height="20px" :src="'/image/bottom/black/Play.png'">
						</div>
						<div v-if="showLeftPanel" class="item-text">
							플레이 엔 고
						</div>
					</div>
				</el-row>
			</el-row>
		</el-row>
	</div>
</client-only>
</template>

<script>
import feathers from "@/plugins/feathers";
import { mapGetters } from "vuex";
import { parseTime, getMiniAddress } from "@/assets/js/utils";
import { getTextColor } from "@/assets/js/data/uicommon"
import { linkImage } from '~/assets/js/data/datamanagement.js'

const mainService = feathers.service('main');
const favoriteService = feathers.service('sportsFavorite')
const lobbyService = feathers.service('getLobbyUrl')

favoriteService.timeout = 60000
lobbyService.timeout = 60000

export default {
 	props: ["isVisibleLogin"],
	name: "sidebamainmenu",
	filters: {
		
	},
  	computed: {
		...mapGetters({
			showLeftPanel: "getShowLeftPanel",
			currentUser: 'auth/currentUser',
			myIp: 'getYourIp',
			isMobile: 'getIsMobile',
			prematchCategory: "sports/getPrematchCategory",
			inplayCategory: "sports/getInplayCategory",
			favorite: "sports/getFavorite",
			queryList: "sports/getQueryList",
			themeType: 'getThemeType',
      		layoutType: 'getLayoutType',
      		isBlackMode: 'getIsBlackMode',
			isUseNoteRead: "getIsUseNoteRead",
			isAvailCasino: "getIsAvailCasino",
			noteCount: "getNoteCount",
			screenWidth: "getScreenWidth",
      		gameSettings: "getGameSettings",
			sportsAPI: "getSportsAPI",
			topGameList: "getTopGameList",
			topLeagueList: "getTopLeagueList"
		})
	},
  	data() {
		return {
			userLevelImageList: {
				yellow14: [
					{
						avatar: "level-avatar-yellow-1",
						number: "level-number-blue-1",
					},
					{
						avatar: "level-avatar-yellow-2",
						number: "level-number-blue-2",
					},
					{
						avatar: "level-avatar-yellow-3",
						number: "level-number-blue-3",
					},
					{
						avatar: "level-avatar-yellow-4",
						number: "level-number-blue-4",
					},
					{
						avatar: "level-avatar-yellow-5",
						number: "level-number-blue-5",
					},
					{
						avatar: "level-avatar-yellow-1",
						number: "level-number-blue-1",
					},
					{
						avatar: "level-avatar-yellow-2",
						number: "level-number-blue-2",
					},
					{
						avatar: "level-avatar-yellow-3",
						number: "level-number-blue-3",
					},
					{
						avatar: "level-avatar-yellow-4",
						number: "level-number-blue-4",
					},
					{
						avatar: "level-avatar-yellow-5",
						number: "level-number-blue-5",
					},
					{
						avatar: "level-avatar-yellow-1",
						number: "level-number-blue-1",
					},
					{
						avatar: "level-avatar-yellow-2",
						number: "level-number-blue-2",
					},
					{
						avatar: "level-avatar-yellow-3",
						number: "level-number-blue-3",
					},
					{
						avatar: "level-avatar-yellow-4",
						number: "level-number-blue-4",
					},
					{
						avatar: "level-avatar-yellow-5",
						number: "level-number-blue-5",
					},
					{
						avatar: "level-avatar-yellow-16",
						number: "level-number-blue-16",
					},
					{
						avatar: "level-avatar-yellow-17",
						number: "level-number-blue-17",
					},
					{
						avatar: "level-avatar-yellow-18",
						number: "level-number-blue-18",
					},
					{
						avatar: "level-avatar-yellow-19",
						number: "level-number-blue-19",
					},
					{
						avatar: "level-avatar-yellow-20",
						number: "level-number-blue-20",
					}
				]
			},
			categoryType: 'prematch',
			selectedSportsTypeId: -1,
			selectedLocationId: -1,
			isVisibleFavorite: false,
			isFavoriteDelete: false,
			isShowCasino: false,
			searchKey: '',
			gameList: [],
			liveGameList: [],
			today: parseTime(new Date(), '{y}-{m}-{d}')
		}
	},
	watch: {
		$route(to, from) {
			this.setShowCasinoMenu()
		},
		currentUser(val) {
			this.getFavorite()
		}
	},
  	created() {
		this.getFavorite()
	},
	mounted() {
		this.setShowCasinoMenu()

		// 스포츠 카테고리 패치
		mainService.off("UpdateCategory")
		mainService.on("UpdateCategory", (category) => {
			if (category.Type == 0) {
				this.$store.commit("sports/SET_PREMATCH_CATEGORY", category.Sports)
			} else if (category.Type == 1) {
				this.$store.commit("sports/SET_INPLAY_CATEGORY", category.Sports)
			}
		})
	},
	destroyed() {
		mainService.off("UpdateCategory")
	},
  	methods: {
		parseTime,
		getTextColor,
		getMiniAddress,
		getLevel() {
			if (this.currentUser) {
				let level = this.currentUser.level
				if (this.layoutType == 'layout2' || this.themeType == 'blue13' || this.themeType == 'yellow11') {
					if (level >= 6 && level <= 10) {
						level -= 5
					}
					if (level >= 11 && level <= 15) {
						level -= 10
					}
				}
				if (level < 10) {
					return '0' + level
				} else {
					return level
				}
			}
		},
		setShowCasinoMenu() {
			if (this.layoutType == 'layout5') {
				if (this.$router.currentRoute.name == "Sports" || this.$router.currentRoute.name == "LiveSports") {
					this.isShowCasino = false
				} else {
					this.isShowCasino = true
				}
			}
		},
		// 게임선택
		async onSelectGame(thirdPartyCode, gameId, isLive) {
			this.$nuxt.$loading.start()
			let casinoInfo = null
			if(thirdPartyCode != -1) {
				casinoInfo = {
					thirdPartyCode: thirdPartyCode,
					gameId: gameId,
					isLive: isLive
				}
			}
			if (this.isMobile && casinoInfo.isLive && thirdPartyCode == 45 && gameId == 0) {
				let thirdPartyCode = casinoInfo.thirdPartyCode
				let param = {
					thirdPartyCode: thirdPartyCode,
					isMobile: this.isMobile
				}
				
				lobbyService.find({query: param}).then((res) => {
					if(res.code == 1) {
						var windowReference = window.open();
						windowReference.location = res.data.lobbyUrl;
					} else {
						this.showMessage( "알림메시지", res.message, "닫기[Close]", res.code == 1 ? 1 : 0 );
					}
					this.$nuxt.$loading.finish()
				})
			} else {
				this.$store.commit("SET_CASINODIALOGINFO", casinoInfo)
			}
		},
		filterEmblem(filename) {
			if (this.sportsAPI) return filename
			return linkImage(filename);
		},
		// 즐겨찾기 얻기
		getFavorite() {
			if(this.currentUser == null) {
				this.$store.commit("sports/SET_FAVORITE", [])
				return
			}
			if (this.themeType != 'blue18' && this.themeType != 'yellow15') {
				return
			}

			favoriteService.find().then(res => {
				if (res.code != 1) {
					console.log(res.message)
				} else {
					this.$store.commit("sports/SET_FAVORITE", res.data.data)
				}
			})
		},
		showMessage(title, content, button, type) {
			this.$store.commit("dialog/SET_DIALOG_DATA", {
				title: title,
				content: content,
				buttonValue: button,
				type: type
			})
		},
		onClickTodayGame() {
			if (this.isUseNoteRead && this.noteCount > 0) {
				this.showMessage('알림메시지', "읽지 않은 중요한 쪽지가 있어 페이지 이동이 불가합니다.", '닫기[Close]', 2)
				return
			}
			let data = {
				selectedSportsCategoryId: -1,
				selectedLocationId: -1,
				selectedLeagueId: -1,
				searchKey: '',
				isSearchToday: 1
			}
			if ((this.themeType == 'red15' || this.themeType == 'gold11' || this.themeType == 'yellow14' || this.themeType == 'gold11' || this.themeType == 'red12' || this.themeType == 'blue15') && !this.currentUser) {
				this.showMessage('알림메시지', "로그인 후 이용 가능합니다.", '닫기[Close]', 2)
				return
			}

			this.$store.commit("sports/SET_QUERYLIST", data)
			this.$router.push('/Sports')
		},
		// 즐겨찾기 탭클릭
		onClickFavorite() {
			if (this.favorite.length == 0) return
			this.isVisibleFavorite = !this.isVisibleFavorite
		},
		// 즐겨찾기 삭제
		async onClickDeleteFavorite(id) {
			await favoriteService.remove(id)
			this.$store.commit("sports/DELETE_FAVORITE", id)
			if (this.favorite.length == 0) this.isVisibleFavorite = false
			this.isFavoriteDelete = true
		},
		// 검색
		searchGame() {
			if (this.isUseNoteRead && this.noteCount > 0) {
				this.showMessage('알림메시지', "읽지 않은 중요한 쪽지가 있어 페이지 이동이 불가합니다.", '닫기[Close]', 2)
				return
			}
			if ((this.themeType == 'red15' || this.themeType == 'gold11' || this.themeType == 'yellow14' || this.themeType == 'gold11' || this.themeType == 'red12' || this.themeType == 'blue15') && !this.currentUser) {
				this.showMessage('알림메시지', "로그인 후 이용 가능합니다.", '닫기[Close]', 2)
				return
			}

			let data = {
				selectedSportsCategoryId: -1,
				selectedLocationId: -1,
				selectedLeagueId: -1,
				searchKey: this.searchKey,
				isSearchToday: 0
			}
			this.$store.commit("sports/SET_QUERYLIST", data)
			this.$router.push('/Sports')
		},
		onKeyDownSearchKey(event) {
			if (event.keyCode == 13) {
				this.searchGame()
			}
		},
		// 스포츠종목 선택
		onSelectSportsType(sportsTypeId) {
			if (this.selectedSportsTypeId == sportsTypeId) {
				let data = {
					selectedSportsCategoryId: sportsTypeId,
    			selectedLocationId: -1,
					selectedLeagueId: -1,
					searchKey: '',
					isSearchToday: 0
				}
				this.$store.commit("sports/SET_QUERYLIST", data)
				this.goToSportsPage()
				this.selectedSportsTypeId = -1
				this.selectedLocationId = 0
				return
			}
			this.selectedSportsTypeId = sportsTypeId
			this.selectedLocationId = 0
		},
		// 나라 선택
		onSelectLocation(locationId) {
			if (this.selectedLocationId == locationId) {
				let data = {
					selectedSportsCategoryId: this.selectedSportsTypeId,
    			selectedLocationId: locationId,
					selectedLeagueId: -1,
					searchKey: '',
					isSearchToday: 0
				}
				this.$store.commit("sports/SET_QUERYLIST", data)
				this.goToSportsPage()
				return
			}
			this.selectedLocationId = locationId
		},
		// 리그 선택
		onSelectLeague(leagueId) {
			if (this.isFavoriteDelete) {
				this.isFavoriteDelete = false
				return
			}
			let data = {
				selectedSportsCategoryId: this.selectedSportsTypeId,
				selectedLocationId: this.selectedLocationId,
				selectedLeagueId: leagueId,
				searchKey: '',
				isSearchToday: 0
			}
			this.$store.commit("sports/SET_QUERYLIST", data)
			this.goToSportsPage()
		},
		// 탑경기 선택
		onSelectTopGame(game) {
			let data = {
				selectedSportsCategoryId: game.Fixture.Sport.Id,
				selectedLocationId: game.Fixture.Location.Id,
				selectedLeagueId: game.Fixture.League.Id,
				searchKey: '',
				isSearchToday: 0
			}
			this.$store.commit("sports/SET_QUERYLIST", data)
			this.$store.commit("sports/SET_SELECTED_FIXTURE_ID", game.FixtureId)
			this.goToSportsPage()
		},
		onSelectTopLeague(sportId, locationId, leagueId) {
			let data = {
				selectedSportsCategoryId: sportId,
				selectedLocationId: locationId,
				selectedLeagueId: leagueId,
				searchKey: '',
				isSearchToday: 0
			}
			this.$store.commit("sports/SET_QUERYLIST", data)
			this.goToSportsPage()
		},
		// 스포츠, 실시간 페이지이동
		goToSportsPage() {
			if (this.isUseNoteRead && this.noteCount > 0) {
				this.showMessage('알림메시지', "읽지 않은 중요한 쪽지가 있어 페이지 이동이 불가합니다.", '닫기[Close]', 2)
				return
			}
			if ((this.themeType == 'red15' || this.themeType == 'gold11' || this.themeType == 'yellow14' || this.themeType == 'gold11' || this.themeType == 'red12' || this.themeType == 'blue15') && !this.currentUser) {
				this.showMessage('알림메시지', "로그인 후 이용 가능합니다.", '닫기[Close]', 2)
				return
			}

			if(this.categoryType == 'prematch') this.$router.push('/Sports')
			else this.$router.push('/LiveSports')
		},
		goToLivePage() {
			if (this.isUseNoteRead && this.noteCount > 0) {
				this.showMessage('알림메시지', "읽지 않은 중요한 쪽지가 있어 페이지 이동이 불가합니다.", '닫기[Close]', 2)
				return
			}
			this.$store.commit("sports/Init_QUERYLIST")
			this.$router.push('/LiveSports')
		},
		onClickSportsTypeTab(category) {
			this.categoryType = category
		},
		// 페이지 이동
		goToPage(val, type) {
			switch (val) {
				case "prematch":
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
					break;
				case "inplay":
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
					break;
				case "mini":
					if (this.isUseNoteRead && this.noteCount > 0) {
						this.showMessage('알림메시지', "읽지 않은 중요한 쪽지가 있어 페이지 이동이 불가합니다.", '닫기[Close]', 2)
						return
					}
          			this.$router.push(this.getMiniAddress(this.gameSettings, this.themeType))
					break;
				case "virtual":
					if (this.isUseNoteRead && this.noteCount > 0) {
						this.showMessage('알림메시지', "읽지 않은 중요한 쪽지가 있어 페이지 이동이 불가합니다.", '닫기[Close]', 2)
						return
					}
					this.$router.push("/VirtualSports/Football")
					break;
				case "casino":
					if (this.$router.currentRoute.name == "Casino" && this.layoutType == 'layout5') {
						return
					}
					if (this.isUseNoteRead && this.noteCount > 0) {
						this.showMessage('알림메시지', "읽지 않은 중요한 쪽지가 있어 페이지 이동이 불가합니다.", '닫기[Close]', 2)
						return
					}
					if (!this.isAvailCasino) {
						this.showMessage('알림메시지', "업데이트 준비중", '닫기[Close]', 2)
						return
					}
					if (type != undefined) {
						this.$router.push({path: "/Casino", query: {type: type}})
					} else {
						this.$router.push("/Casino")
					}
					break;
				case "livescore":
					this.$router.push("/GameResult")
					break;
				case "payin":
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
					break;
				case "payout":
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
					break;
				case "customer-center":
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
					break;
				case "note":
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
					break;
				case "tv":
					if (this.themeType == 'yellow18') {
						var windowReference = window.open();
						windowReference.location = 'https://indiebet-tv.com';
						return
					}
					this.$router.push("/TV")
					break;
				case "attendance":
					this.$router.push("/Attendance")
					break;
				case "fame":
					this.$router.push("/Fame")
					break;
				case "friend":
					this.$router.push("/Friend")
					break;
				case "bethistory":
					if (this.layoutType == 'layout2') {
						if (this.currentUser) {
							this.$store.commit('SET_ORANGEDIALOGVISIBLE')
							this.$store.commit('SET_ORANGEDIALOGTAB', 5)
							this.$store.commit('SET_BETTINGHISTORYTAB', 'sports')
						} else {
							this.$store.commit("SET_LOGINDIALOGVISIBLE");
							this.$store.commit("SET_LOGINSIDEVERIFY", false)
						}
					} else {
						this.$router.push("/BettingHistory/Sports")
					}
					break;
				case 'money-move':
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
				case 'event':
					this.$router.push("/Event")
					break
				case 'notice-rule':
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
				case 'cash':
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
					break;
				case 'coupon':
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
					break;
				case "moneymove":
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
					break;
				case "cash-history":
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
					break;
				case "poker":
					this.$router.push("/Poker")
					break;
			}	
		}
	}
}
    
</script>