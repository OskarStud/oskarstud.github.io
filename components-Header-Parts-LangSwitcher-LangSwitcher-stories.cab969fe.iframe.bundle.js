"use strict";(self.webpackChunkreact_start_template=self.webpackChunkreact_start_template||[]).push([[839],{"./src/components/Header/Parts/LangSwitcher/LangSwitcher.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});let __WEBPACK_DEFAULT_EXPORT__={title:"LangSwitcher",component:__webpack_require__("./src/components/Header/Parts/LangSwitcher/LangSwitcher.tsx").k};var Default={args:{}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...Default.parameters?.docs?.source}}};let __namedExportsOrder=["Default"]},"./src/app/localization/settings.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{kH:()=>LANGUAGE_STORAGE_KEY,go:()=>Locale});var Locale,i18next=__webpack_require__("./node_modules/i18next/dist/esm/i18next.js"),es=__webpack_require__("./node_modules/react-i18next/dist/es/index.js"),LANGUAGE_STORAGE_KEY="language";!function(Locale){Locale.ru="ru",Locale.en="en"}(Locale||(Locale={})),i18next.ZP.use(es.Db).init({resources:{en:{translation:{errors:{unexpected_error:"Unexpected error. We automatically register errors and will fix everything soon","Failed to fetch":"Connection error. Go to the server directory and start the server using the start script",is_required:"Required field",invalid_email_address:"Invalid email address",too_short_password:"The password is too short",not_same_password:"Passwords don't match",ERR_INCORRECT_EMAIL_OR_PASSWORD:"Incorrect password or email",ERR_NOT_FOUND:"An entity with this id was not found",ERR_USER_NOT_REGISTER:"Register to access this feature",ERR_INCORRECT_PASSWORD:"Invalid password",ERR_ACCOUNT_ALREADY_EXIST:"An account with this email already exists",ERR_INVALID_PASSWORD:"The password must contain at least 8 characters",ERR_INVALID_EMAIL:"Invalid email"},screens:{ProfileScreen:{title:"Profile",updateProfile:{title:"Change profile",success:"Profile changed successfully",save:"Save"},changePassword:{title:"Change password",success:"Password changed successfully",save:"Change"}},ExamplesScreen:{title:"Examples"},LessonsScreen:{title:"Lessons"}},forms:{AuthForm:{email:{title:"Email",placeholder:"Enter email"},password:{title:"Password",placeholder:"Enter password"}},ChangePasswordForm:{password:{title:"Password",placeholder:"Enter password"},newPassword:{title:"New password",placeholder:"Enter new password"},repeatPassword:{title:"Repeat password",placeholder:"Repeat password"}},EmailForm:{email:{title:"Email",placeholder:"Enter email"}},ProfileForm:{name:{title:"Nickname",placeholder:"Come up with a pseudonym for yourself"},about:{title:"About",placeholder:"Write something about yourself"}},RepeatPasswordForm:{password:{title:"Password",placeholder:"Enter password"},repeatPassword:{title:"Repeat password",placeholder:"Repeat password"}}},components:{RemoveButton:{title:"Data will be lost, delete?",ok:"Remove",cancel:"Cancel"},RangeInputs:{from:"From",to:"To"},InputIntRangeList:{title:"Range"},NumberInput:{float:{placeholder:"Fractional number"},integer:{placeholder:"Integer"}},login:{enter:"Login",leave:"Logout"},header:{nav:"Navigation",root:"Home",profile:"Profile","home-works":"Home works",examples:"Examples",lessons:"Lessons",teachers:"Teachers"},logo:{text:"LOGO"},ButtonIntoCart:{text:"Into cart",count:"Count"},SimpleButton:{text:"Simple button"}},enums:{ExampleKey:{modal:"Modal",movable:"Movable",sortableList:"Sortable List",waveSlider:"Wave Slider",inputs:"Inputs"},LessonKey:{generator:"Generators iterators",patterns:"Patterns",functionalProgramming:"Functional Programming",babel:"Babel + typescript",socketsAndWorkers:"Web sockets & Web workers",graphql:"Graphql"}}}},ru:{translation:{errors:{unexpected_error:"Неожиданная ошибка. Мы автоматически регистрируем ошибки и скоро все исправим","Failed to fetch":"Ошибка соединения. Перейдите в директорию server и запустите сервер с помощью скрипта start",is_required:"Обязательное поле",invalid_email_address:"Некорректный email адрес",too_short_password:"Слишком короткий пароль",not_same_password:"Пароли не совпадают",ERR_INCORRECT_EMAIL_OR_PASSWORD:"Некорректный пароль или email",ERR_NOT_FOUND:"Сущность с таким id не найдена",ERR_USER_NOT_REGISTER:"Зарегистрируйтесь, чтобы получить доступ к этой функции",ERR_INCORRECT_PASSWORD:"Некорректный пароль",ERR_ACCOUNT_ALREADY_EXIST:"Аккаунт с таким email уже существует",ERR_INVALID_PASSWORD:"Пароль должен содержать от 8 символов",ERR_INVALID_EMAIL:"Некорректный email"},screens:{ProfileScreen:{title:"Профиль",updateProfile:{title:"Изменить профиль",success:"Профиль успешно изменен",save:"Сохранить"},changePassword:{title:"Изменить пароль",success:"Пароль успешно изменен",save:"Изменить"}},ExamplesScreen:{title:"Примеры"},LessonsScreen:{title:"Уроки"}},forms:{AuthForm:{email:{title:"Email",placeholder:"Укажите email"},password:{title:"Пароль",placeholder:"Укажите пароль"}},ChangePasswordForm:{password:{title:"Пароль",placeholder:"Укажите пароль"},newPassword:{title:"Новый пароль",placeholder:"Укажите новый пароль"},repeatPassword:{title:"Повторите пароль",placeholder:"Повторите пароль"}},EmailForm:{email:{title:"Email",placeholder:"Укажите email"}},ProfileForm:{name:{title:"Псевдоним",placeholder:"Придумайте себе псевдоним"},about:{title:"О себе",placeholder:"Напишите что-нибудь о себе"}},RepeatPasswordForm:{password:{title:"Пароль",placeholder:"Укажите пароль"},repeatPassword:{title:"Повторите пароль",placeholder:"Повторите пароль"}}},components:{RemoveButton:{title:"Данные будут потеряны, удалить?",ok:"Удалить",cancel:"Отмена"},RangeInputs:{from:"От",to:"До"},InputIntRangeList:{title:"Диапазон"},NumberInput:{float:{placeholder:"Дробное число"},integer:{placeholder:"Целое число"}},login:{enter:"Вход",leave:"Выход"},header:{nav:"Навигация",root:"Главная",profile:"Профиль","home-works":"Домашние работы",examples:"Примеры",lessons:"Уроки",teachers:"Преподаватели"},logo:{text:"ЛОГО"},ButtonIntoCart:{text:"В корзину",count:"Количество"},SimpleButton:{text:"Обычная кнопка"}},enums:{ExampleKey:{modal:"Модальное окно",movable:"Перемещаемый",sortableList:"Сортируемый список",waveSlider:"Слайдер",inputs:"Инпуты"},LessonKey:{generator:"Генераторы итераторы",patterns:"Паттерны",restApi:"Rest Api",functionalProgramming:"Функциональное программирование",babel:"Babel + typescript",socketsAndWorkers:"Web sockets & Web workers",graphql:"Graphql"}}}}},lng:localStorage.getItem(LANGUAGE_STORAGE_KEY)||"ru",interpolation:{escapeValue:!1}})},"./src/components/Header/Parts/LangSwitcher/LangSwitcher.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k:()=>LangSwitcher});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_i18next__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-i18next/dist/es/index.js"),_app_localization_settings__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/app/localization/settings.ts"),LangSwitcher=function(){var i18n=(0,react_i18next__WEBPACK_IMPORTED_MODULE_1__.$G)().i18n,lang=i18n.language===_app_localization_settings__WEBPACK_IMPORTED_MODULE_2__.go.ru?_app_localization_settings__WEBPACK_IMPORTED_MODULE_2__.go.en:_app_localization_settings__WEBPACK_IMPORTED_MODULE_2__.go.ru;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{type:"button",onClick:function(){return i18n.changeLanguage(lang)}},lang)};try{LangSwitcher.displayName="LangSwitcher",LangSwitcher.__docgenInfo={description:"",displayName:"LangSwitcher",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Header/Parts/LangSwitcher/LangSwitcher.tsx#LangSwitcher"]={docgenInfo:LangSwitcher.__docgenInfo,name:"LangSwitcher",path:"src/components/Header/Parts/LangSwitcher/LangSwitcher.tsx#LangSwitcher"})}catch(__react_docgen_typescript_loader_error){}}}]);