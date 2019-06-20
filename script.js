// Алдымен сөздік құрастырамыз
var arr = {
  'а':'a',
  'б':'b',
  'ц':'c',
  'д':'d',
  'е':'e',
  'ф':'f',
  'и':'i',
  'г':'g',
  'х':'h',
  'һ':'h',
  'й':'j',
  'к':'k',
  'л':'l',
  'м':'m',
  'р':'r',
  'н':'n',
  'о':'o',
  'э':'je',
  'Э':'Je',
  'п':'p',
  'қ':'q',
  'с':'s',
  'т':'t',
  'ұ':'u',
  'в':'v',
  'у':'u',
  'ы':'y',
  'з':'z',
  'ә':'ae',
  'ө':'oe',
  'ү':'ue',
  'ң':'ng',
  'ғ':'gh',
  'ч':'ch',
  'ш':'sh',
  'щ':'sh',
  'ж':'zh',
  'А':'A',
  'я':'ya',
  'ю':'ju',
  'Я':'Ya',
  'Ю':'Ju',
  'Б':'B',
  'Ц':'C',
  'Д':'D',
  'Е':'E',
  'Ф':'F',
  'Г':'G',
  'Х':'H',
  'Һ':'H',
  'Й':'J',
  'К':'K',
  'Щ':'Sh',
  'Л':'L',
  'М':'M',
  'Н':'N',
  'Р':'R',
  'И':'I',
  'О':'O',
  'П':'P',
  'Қ':'Q',
  'С':'S',
  'Т':'T',
  'Ұ':'U',
  'В':'V',
  'У':'U',
  'Ы':'Y',
  'З':'Z',
  'Ә':'Ae',
  'Ө':'Oe',
  'Ү':'Ue',
  'Ң':'Ng',
  'Ғ':'Gh',
  'Ч':'Ch',
  'Ш':'Sh',
  'Ж':'Zh',
};

//Сайттын әр бөлшегіндегі мәтінді аудару
function Q(node) {
    var text = node.nodeValue;
    var res = "";
    for (c  in text) {
        var t = text.charAt(c);
        if (/[а-яА-ЯЁё]/.test(t) || t == 'ә' || t == 'ө' || t == 'ү' || t == 'ұ' || t == 'ң' || t == 'қ' || t == 'Ә' || t == 'ғ' || t == 'Ғ' || t == 'Ө' || t == 'Ү' || t == 'Ұ' || t == 'Ң' || t == 'Қ')
        {
            var r = arr[t];
            res += r;
        }
        else 
            res += t;
    }
    node.nodeValue = res;
}

// Сайттын бөлшектерге жіктеу
// DFS атты алгоритм қолданылуда
function rec(node) {
    Q(node);
    (node.childNodes).forEach(rec);
}

window.onload = function() {
    rec(document.body);
};
