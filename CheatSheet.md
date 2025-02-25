# Работа в MarkDown


# Оформленеи текста
**Жирный текст**

*Курсив*

_Курсив_

***Жирный и курсив***

## Работа со ссылками
[Облачные ссылки](https://example.com)

*Автоматические ссылка*
<https://example.com>

[Внутренняя ссылка](#заголовок-1)


### Работа со списками
1. Первый пункт
2. Второй пункт
3. Третий пункт

#### Маркированные списки
- Элемент списка
- Ещё один элемент
    - Вложенный элемент

##### Список задач
- [ ] Не выполнено
- [x] Выполнено

###### Вставка изображеений!
```bash
![Продам мотоцикл](images/1.jpg "Продам мотоцикл")
```

![Продам мотоцикл](images/1.jpg "Продам мотоцикл")

# Основный команды и флаги в GIT
# GIT Cheat Sheet

## 1. **Инициализация репозитория**
Создание нового локального репозитория:
```bash
git init
```


## 2. **Статус репозитория**
Показать текущее состояние репозитория.
```bash
git status
```

## 3. **Добавление файлов**
Добавить файл или все изменения в индекс.
```bash
git add <имя_файла>
git add .  # Добавить все файлы
```

## 4. **Создание коммита**
Создать новый коммит с сообщением.
```bash
git commit -m "Сообщение коммита"
```
## 5. **История изменений**
Показать историю коммитов.
```bash
git log
git log --oneline  # Сокращённый вид
git log --graph    # Графическое представление веток"
```
## 6. **Удалённые репозитории**
Добавить удалённый репозиторий и просмотреть их список.
```bash
git remote add origin <URL>
git remote -v
```

## 7. **Удалённые репозитории**
Добавить удалённый репозиторий и просмотреть их список.
```bash
git remote add origin <URL>
git remote -v
```

## 8. **Отправка изменений**
Отправить изменения в удалённый репозиторий.
```bash
git push -u origin <ветка>
```

## 9. **Получение изменений**
Описание: Скачать изменения из удалённого репозитория.
```bash
git pull
```
## 10. **Создание веток**
Работа с ветками.
```bash
git branch <имя_ветки>       # Создать новую ветку
git checkout <имя_ветки>     # Переключиться на ветку
git checkout -b <имя_ветки>  # Создать и переключиться на новую ветку
```
## 11. **Слияние веток**
Объединение изменений из одной ветки в другую.
```bash
git checkout master  # Перейти в основную ветку
git merge <имя_ветки>  # Слить изменения из другой ветки
```
## 12. **Отмена изменений**
Отмена изменений или снятие из индекса.
```bash
git checkout -- <имя_файла>  # Отменить изменения в файле
git reset <имя_файла>        # Удалить изменения из staging area
```
## 13. **Удаление файлов**
Удаление файлов из репозитория.
```bash
git rm <имя_файла>           # Удалить файл из индекса и директории
git rm --cached <имя_файла>  # Удалить файл только из индекса
```
## 14. **Работа с тегами**
Работа с тегами
```bash
git tag <имя_тега>          # Создать тег
git tag                     # Просмотреть все теги
git push origin --tags      # Отправить теги в удалённый репозиторий
```
## 15. **Работа с rebase**
Интерактивный rebase для редактирования истории коммитов.
```bash
git rebase -i HEAD~<число_коммитов>
```
## 16. **Работа с rebase**
Показать разницу между версиями
```bash
git diff
```
Очистить untracked файлы
```bash
git clean -f
```
Настройка пользователя
```bash
git config --global user.name "Ваше Имя"
git config --global user.email "ваш.email@example.com"
```