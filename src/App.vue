<template>
	<div id="app">
		<app-header />
		<router-view />
	</div>
</template>

<script>
import Cookies from 'js-cookie'
import AppHeader from '@/components/AppHeader'

export default {
	created() {
		let auth = Cookies.get('auth')
		if (auth) {
			auth = JSON.parse(auth)
			this.$store.commit('signIn', auth)
		} else this.$router.push('/auth')
	},
	components: {
		AppHeader
	}
}
</script>


<style>
@-webkit-keyframes fadeIn {
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}

@keyframes fadeIn {
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}

::selection {
	background: #4a90e2;
	color: #ffffff;
}

* {
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
}

body {
	margin: 0;
	font-family: -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	background: #f6f6f8;
}

img {
	max-width: 100%;
}

h1 {
	font-size: 30px;
	font-weight: 600;
}

h2 {
	font-size: 22px;
	font-weight: 600;
}

h3 {
	font-size: 16px;
	font-weight: 600;
}

h4 {
	font-size: 14px;
	font-weight: 600;
}

p {
	font-size: 13px;
	font-weight: normal;
	line-height: 18px;
	line-height: 1.5;
}

b,
strong {
	font-weight: 600;
}

.hidden {
	display: none !important;
}

.error {
	font-size: 12px;
	text-align: center;
	display: block;
	margin-bottom: 20px;
	color: red;
	animation: fadeIn 0.2s ease-in-out;
}

.link {
	color: #4a90e2;
	-webkit-transition: color 0.2s ease-in-out;
	transition: color 0.2s ease-in-out;
}
.link:hover {
	color: #6da6e8;
}

.center {
	text-align: center;
}

.card {
	display: block;
	background: #ffffff;
	border-radius: 8px;
	margin: 32px 0;
	padding: 16px;
	-webkit-box-shadow: 0 10px 40px rgba(61, 81, 112, 0.1);
	box-shadow: 0 10px 40px rgba(61, 81, 112, 0.1);
}
.card.card--margin {
	margin: 16px;
}
.card.card--nopadding {
	padding: 0;
}

.container {
	width: 100%;
	max-width: 1200px;
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
	padding: 0 15px;
	margin: 0 auto;
	position: relative;
}

.row {
	display: flex;
	margin: 0 -15px;
}

.col {
	width: 100%;
	margin: 0 15px;
}

.button {
	position: relative;
	display: inline-block;
	font-family: 'Open Sans', Helvetica, Arial, sans-serif;
	font-size: 13px;
	font-weight: 600;
	letter-spacing: 0.025em;
	cursor: pointer;
	border: none;
	outline: none;
	margin: 16px 0;
	padding: 16px 32px;
	border-radius: 100px;
	background: #4a90e2;
	color: #ffffff;
	text-decoration: none;
	text-align: center;
	-webkit-box-shadow: 0 2px 10px rgba(74, 144, 226, 0.2);
	box-shadow: 0 2px 10px rgba(74, 144, 226, 0.2);
	-webkit-transition: 0.2s ease-in-out;
	transition: 0.2s ease-in-out;
}
.button svg {
	width: 20px;
	height: 20px;
	line-height: 1;
	overflow: hidden;
	fill: #4a90e2;
	-webkit-transition: fill 0.2s ease-in-out;
	transition: fill 0.2s ease-in-out;
}
.button.button--ghost {
	background: transparent;
	border: 1px solid #4a90e2;
	color: #4a90e2;
	padding: 15px 31px;
}
.button.button--ghost:hover {
	color: #ffffff;
	border-color: #6da6e8;
}
.button.button--ghost:hover svg {
	fill: #ffffff;
}
.button:hover {
	background: #6da6e8;
	-webkit-box-shadow: 0 4px 15px rgba(74, 144, 226, 0.3);
	box-shadow: 0 4px 15px rgba(74, 144, 226, 0.3);
}
.button:hover svg {
	fill: #6da6e8;
}
.button:active {
	background: #277adc;
	-webkit-box-shadow: 0 2px 15px rgba(74, 144, 226, 0.3);
	box-shadow: 0 2px 15px rgba(74, 144, 226, 0.3);
}
.button:active svg {
	fill: #6da6e8;
}
.button.button--center {
	display: table;
	margin: 16px auto;
}
.button.button--circle {
	width: 49px;
	min-width: 49px;
	height: 49px;
	display: -webkit-inline-box;
	display: -webkit-inline-flex;
	display: -ms-inline-flexbox;
	display: inline-flex;
	-webkit-justify-content: center;
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	justify-content: center;
	-webkit-align-items: center;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	padding: 10px;
}
.button.button--circle.show-768 {
	display: none;
}
@media only screen and (max-width: 768px) {
	.button.button--circle.show-768 {
		display: -webkit-inline-box;
		display: -webkit-inline-flex;
		display: -ms-inline-flexbox;
		display: inline-flex;
	}
}
.button.button--circle img {
	max-width: 20px;
	max-height: 20px;
}
.button.button--200 {
	min-width: 200px;
}
.button.button--min {
	padding: 8px 32px;
}
.button.button--min.button--circle {
	width: 32px;
	min-width: 32px;
	height: 32px;
	padding: 5px;
}
.button.button--auto {
	min-width: 0;
	padding-left: 16px;
	padding-right: 16px;
}
.button.button--icon {
	width: 40px;
}

.button__notification {
	position: absolute;
	display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
	-webkit-justify-content: center;
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	justify-content: center;
	-webkit-align-items: center;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	font-size: 11px;
	text-align: center;
	top: -1px;
	right: -3px;
	width: 15px;
	height: 15px;
	border-radius: 15px;
	color: #4a90e2;
	background: #ffffff;
	border: 1px solid #4a90e2;
}

.button-toggle {
	display: -webkit-inline-box;
	display: -webkit-inline-flex;
	display: -ms-inline-flexbox;
	display: inline-flex;
	margin-right: 1px;
}
.button-toggle .button {
	border-radius: 0;
	margin-right: -1px;
	padding: 5px;
	min-width: 0;
	max-height: 32px;
	display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
	-webkit-justify-content: center;
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	justify-content: center;
	-webkit-align-items: center;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
}
.button-toggle .button.active {
	background: #4a90e2;
	color: #ffffff;
}
.button-toggle .button.active svg {
	fill: #ffffff;
}
.button-toggle .button:first-child {
	border-top-left-radius: 100px;
	border-bottom-left-radius: 100px;
}
.button-toggle .button:last-child {
	border-top-right-radius: 100px;
	border-bottom-right-radius: 100px;
}

.input {
	position: relative;
	display: block;
	width: 100%;
	max-width: 320px;
	margin: 0;
	margin-bottom: 24px;
}
.input .select__wrap .dropdown-select {
	margin-top: 0;
}
.input.input--min {
	margin: 0;
}
.input.input--min .input__input {
	height: 32px;
	padding: 15px 16px;
}
.input.input--autocomplete input:focus + .input--autocomplete__list {
	display: block;
}
.input.input--search {
	position: relative;
	width: 320px;
	margin-bottom: 0;
}
.input.input--search .input__input {
	padding-right: 42px;
}
.input.input--search .input__button {
	color: #3d5170;
	opacity: 0.35;
	-webkit-transition: opacity 0.2s ease-in-out;
	transition: opacity 0.2s ease-in-out;
	background: none;
	padding: 15px 13px;
	border: 0;
	position: absolute;
	top: 0;
	right: 0;
	cursor: pointer;
	outline: none;
}
.input.input--search .input__button:hover {
	opacity: 1;
}

.input--autocomplete__list {
	display: none;
	position: absolute;
	left: 0;
	right: 0;
	margin: 0;
	padding: 0;
	max-height: 160px;
	overflow: scroll;
	overflow-y: hidden;
	overflow-x: hidden;
	overflow-y: auto;
	-ms-overflow-style: none;
	overflow: -moz-scrollbars-none;
}
.input--autocomplete__list::-webkit-scrollbar {
	display: none;
}

.input--autocomplete__item {
	display: block;
	font-size: 16px;
	padding: 7px 8px;
	color: #3d5170;
	text-decoration: none;
	-webkit-transition: background 0.2s ease-in-out;
	transition: background 0.2s ease-in-out;
	-webkit-animation: fadeIn 0.2s ease;
	animation: fadeIn 0.2s ease;
}
.input--autocomplete__item:hover {
	background: #f6f6f8;
}

.input__label {
	margin: 0;
	margin-bottom: 8px;
}

.input__input {
	display: block;
	margin: 0;
	font-family: 'Open Sans', Helvetica, Arial, sans-serif;
	font-size: 14px;
	color: #3d5170;
	border: 1px solid #c2c2ca;
	height: 48px;
	padding: 15px 16px;
	line-height: 16px;
	border-radius: 2px;
	width: 100%;
	outline: none;
	-webkit-transition: border-color 0.2s ease-in-out;
	transition: border-color 0.2s ease-in-out;
	-webkit-appearance: unset;
}
.input__input::-webkit-input-placeholder {
	color: #c2c2ca;
	-webkit-transition: opacity 0.2s ease-in-out;
	transition: opacity 0.2s ease-in-out;
}
.input__input:-ms-input-placeholder {
	color: #c2c2ca;
	-webkit-transition: opacity 0.2s ease-in-out;
	transition: opacity 0.2s ease-in-out;
}
.input__input::-ms-input-placeholder {
	color: #c2c2ca;
	-webkit-transition: opacity 0.2s ease-in-out;
	transition: opacity 0.2s ease-in-out;
}
.input__input::placeholder {
	color: #c2c2ca;
	-webkit-transition: opacity 0.2s ease-in-out;
	transition: opacity 0.2s ease-in-out;
}
.input__input:focus {
	border-color: #4a90e2;
}
.input__input:focus::-webkit-input-placeholder {
	opacity: 0;
}
.input__input:focus:-ms-input-placeholder {
	opacity: 0;
}
.input__input:focus::-ms-input-placeholder {
	opacity: 0;
}
.input__input:focus::placeholder {
	opacity: 0;
}

.textarea {
	display: block;
	width: 100%;
	max-width: 320px;
	margin: 0px 0 24px;
}
.textarea.textarea--card {
	margin-top: 32px;
	margin-bottom: 16px;
	padding: 0;
	max-width: 100%;
}
.textarea.textarea--card .textarea__input {
	border-radius: 8px;
}

.textarea__label {
	margin: 0;
	margin-bottom: 8px;
}

.textarea__input {
	display: block;
	margin: 16px 0;
	font-family: 'Open Sans', Helvetica, Arial, sans-serif;
	font-size: 14px;
	color: #3d5170;
	border: 1px solid #c2c2ca;
	height: 96px;
	padding: 8px 16px;
	border-radius: 2px;
	width: 100%;
	resize: vertical;
	outline: none;
	-webkit-transition: border-color 0.2s ease-in-out;
	transition: border-color 0.2s ease-in-out;
}
.textarea__input::-webkit-input-placeholder {
	color: #c2c2ca;
	-webkit-transition: opacity 0.2s ease-in-out;
	transition: opacity 0.2s ease-in-out;
}
.textarea__input:-ms-input-placeholder {
	color: #c2c2ca;
	-webkit-transition: opacity 0.2s ease-in-out;
	transition: opacity 0.2s ease-in-out;
}
.textarea__input::-ms-input-placeholder {
	color: #c2c2ca;
	-webkit-transition: opacity 0.2s ease-in-out;
	transition: opacity 0.2s ease-in-out;
}
.textarea__input::placeholder {
	color: #c2c2ca;
	-webkit-transition: opacity 0.2s ease-in-out;
	transition: opacity 0.2s ease-in-out;
}
.textarea__input:focus {
	border-color: #4a90e2;
}
.textarea__input:focus::-webkit-input-placeholder {
	opacity: 0;
}
.textarea__input:focus:-ms-input-placeholder {
	opacity: 0;
}
.textarea__input:focus::-ms-input-placeholder {
	opacity: 0;
}
.textarea__input:focus::placeholder {
	opacity: 0;
}

@media only screen and (max-width: 1200px) {
	.table__wrap {
		max-width: 100%;
		overflow-x: scroll;
		overflow-y: hidden;
	}
}

.table {
	width: 100%;
	font-size: 14px;
	min-width: 500px;
}
.table tr .gu-transit {
	display: none;
}
.table tr:hover td {
	background: #fcfcfc;
}
.table th {
	text-align: left;
	height: 48px;
	font-weight: 600;
	background: #f6f6f8;
	padding: 8px 15px;
	border-bottom: 1px solid #e8e8ed;
	border-right: 1px solid #e8e8ed;
}
.table th:last-child {
	border-right: 0;
}
.table td {
	padding: 14px 15px;
	border-bottom: 1px solid #f6f6f8;
	border-right: 1px solid #f6f6f8;
	-webkit-transition: background 0.2s ease-in-out;
	transition: background 0.2s ease-in-out;
}
.table td:last-child {
	border-right: 0;
}
.table td .checkbox,
.table td .button {
	margin: 0;
}
.table .active td,
.table .active:hover td {
	background: #4a90e2;
	color: #f6f6f8;
	border-color: #4a90e2;
}
.table .hilight td,
.table .hilight:hover td {
	background: #f6f6f8;
	border-color: #e8e8ed;
}
.table .wrong td,
.table .wrong:hover td {
	background: #ffe6e6;
}
.table .accent td,
.table .accent:hover td {
	font-weight: 600;
}
.table.table--small th,
.table.table--small td {
	padding: 14px 8px;
}
.table .table__small {
	width: 30px;
	max-width: 30px;
}

.table__link {
	color: inherit;
	text-decoration: none;
}

.table__button {
	display: inline-block;
	color: #4a90e2;
	margin-left: auto;
	padding: 0 5px;
}
</style>
