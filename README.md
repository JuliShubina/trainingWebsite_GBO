<p>Учбовий сайт з авто сервіс послуг. Сайт розроблений для авто майстра з метою його представлення й реклами його послуг. Ресурс складається з чотирьох сторінок.</p>
<ul>
		<li><a href="[text](https://julishubina.github.io/trainingWebsite_GBO/#)">Головна</a> розміщує інформацію чим займається авто мастер</li>
		<li><a href="[text](https://julishubina.github.io/trainingWebsite_GBO/services.html)">Послуги</a> розміщує більш детальний опис послуг які надає СТО</li>
		<li><a href="[text](https://julishubina.github.io/trainingWebsite_GBO/about.html)">Про нас</a> інформація про СТО</li>
		<li><a href="[text](https://julishubina.github.io/trainingWebsite_GBO/about.html)">Контакти</a> контактна інформація майстра.</li>
</ul>

 <p>Для того щоб сторінки були адаптивні використовуються медіа запити, відносні одиниці для задання розмірів, а також функція calc() для  перерахування розміру шрифту при зміні розміру view port , ця же функція використовується для позиціювання popup при зміні розміру view port.</p>

<ul>Стилі розбила на компоненти для зручності:
	<li>style.css файл  стилів для головної сторінки</li>
	<li>services.css файл стилів для сторінки "Послуги"</li>
	<li>about.css файл стилів для сторінки "Про нас"</li>
	<li>contacts.css файл стилів для сторінки "Контакти"</li>
	<li>reset.css скидання стилів</li>
	<li>popup.css файл який містить стилі для іконки info , а також інформації яку вона відображає.</li>
	<li>hero_icon.css стилі іконки "прапорця" (checkmark) в hero  секції.</li>
	<li>header.css стилі "шапки" (далі header)сайта.</li>
	<li>footer.css стилі "підвалу"(далі footer) сайта.</li>
	<li>burger.css стилі "бургер" меню.</li>
	<li>base.css базові стилі, які притаманні для всіх сторінок.</li>
</ul>
	<p>За допомогою java script на сайте реализовано  декілька подій.</p>
	 <ul>
		А саме:
			<li> "бургер" меню (burger.js)</li>
			<li>зміна кольору фона header  при скролі (header.js)</li>
			<li>з'являється іконка  "прапорця" при альбомній орієнтації мобільних телефонів  (hero_icon_visibility.js)</li>
			<li>скролить фон hero section(hero_icon.js)</li>
			<li> додає стилі при наведенні мишки на hero_icon (по типу hover) (info_icon-hover.js)</li>
			<li>змінює колір фону іконки info_icon при перетині її з header та footer(intersection.js)</li>
			<li>при скролі повільніше скролить hero__background (parallax.js)</li>
			<li>при клікі на іконці info_icon з’являється повідомлення (popup.js)</li>
			<li> згортає та розгортає спойлер на сторінці "Послуги" (spoiler.js)</li>
	 </ul>

<ol>
	Планую переробити:
	<li>Увесь сайт на single page за  допомогою React.</li>
	<li>Хочу щоб усі одиниці виміру були відносні.</li>
	<li>Parallax переробити бо логіка не дуже.</li>
	<li>Pозібратися з БЕМ та перейменувати класи.</li>
</ol>
