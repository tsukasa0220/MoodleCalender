//カレンダーの追加
function createEvent(calendarId, id, titles, content, due, color) {
  let calendar = CalendarApp.getCalendarById(calendarId);
  let title = titles + '[ID:' + id + ']';
  let startTime;
  if (color === 2) {
    startTime = new Date((due - 5400) * 1000);
  } else {
    startTime = new Date(due * 1000);
  }
  let endTime = new Date(due * 1000);
  let options = {
    description:content,
    location: ""
  }
  let event = calendar.createEvent(title, startTime, endTime, options);

  event.setColor(color);
}

//moodleのイベント情報を取得する
function getCalenderEvent(calendarId) {
  //アクセス可能なカレンダーのIDを指定して、Googleカレンダーを取得
  let myCalendar = CalendarApp.getCalendarById(calendarId);

  //イベントの開始日(-7)
  let startDate = new Date();
  startDate.setDate(startDate.getDate() - 7);

  //イベントの終了日(+28)
  let endDate = new Date();
  endDate.setDate(endDate.getDate() + 28);

  //開始日～終了日に存在するイベントを取得
  let myEvent = myCalendar.getEvents(startDate, endDate);
  if (!myEvent) {return 0;}
  
  //カレンダーの内容だけを取得して配列に代入する
  let myTitle = []
  for(let i = 0 ; i < myEvent.length ; i++ ){
    myTitle[i] = myEvent[i].getTitle();
  }
  return myTitle;
}
