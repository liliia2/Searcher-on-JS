let textForSearch, systemForSearch, errorMessage = '';

function searchText() {
  textForSearch = document.getElementById('searchText').value;
  systemForSearch = document.getElementById('searchSystem').value;
  if (dataValidation(textForSearch, systemForSearch)) {
    let url = '';
    if (systemForSearch === 'ask') {
      url = 'https://uk.' + systemForSearch + '.com/web?o=0&l=dir&qo=serpSearchTopBox&q=' + textForSearch;
    } else {
      url = 'https://www.' + systemForSearch + '.com/search?q=' + textForSearch;
    }
    window.location.href = url;
  }
}

function dataValidation(textForSearch, systemForSearch) {
  if (textForSearch.match(/[A-ZА-Я0-9]+/gi) && systemForSearch !== 'Укажите поисковую систему') {
    return true;
  } else {
    if (textForSearch.length < 1) {
      document.getElementById('searchText').classList.add('red');
      errorMessage = 'Введите текст для поиска'
    } else if (!textForSearch.match(/[A-ZА-Я0-9]+/gi)) {
      document.getElementById('searchText').classList.add('red');
      errorMessage = 'Введите корректный запрос';
    } else if (systemForSearch === 'Укажите поисковую систему') {
      document.getElementById('searchSystem').classList.add('red');
      errorMessage = 'Выберите систему для поиска';
    }
    document.getElementById('errorText').innerHTML = errorMessage;
    return false;
  }
}

function keyClick() {
  if (event.keyCode === 13) searchText();
}

function checkError() {
  if (errorMessage !== '') {
    if (errorMessage === 'Введите текст для поиска' || errorMessage === 'Введите корректный запрос') {
      document.getElementById('searchText').classList.remove('red');
    } else if (errorMessage === 'Выберите систему для поиска') {   
      document.getElementById('searchSystem').classList.remove('red');
    }
    errorMessage = '';
    document.getElementById('errorText').innerHTML = errorMessage;
  }
}
