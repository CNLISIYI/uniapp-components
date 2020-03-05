// 转换格式： 年/月/日 时:分:秒
const formatSecond = date => {
	var date = new Date(date)
	const year = date.getFullYear()
	const month = date.getMonth() + 1
	const day = date.getDate()
	const hour = date.getHours()
	const minute = date.getMinutes()
	const second = date.getSeconds()
	return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(
		':')
}
// 年/月/日
const getDate = ( date, diff = 0 ) => {
	let dateStr = date.replace( /-/g, '/' );
	let newDate = new Date( dateStr )
	let year = newDate.getFullYear()
	let month = newDate.getMonth() + 1
	let day = newDate.getDate()

	if ( diff != 0 ) {
		let dayStamp = newDate.setDate( day + diff );
		year = new Date( dayStamp ).getFullYear();
		month = new Date( dayStamp ).getMonth() + 1;
		day = new Date( dayStamp ).getDate();
	}

	return [ year, month, day ].map( formatNumber ).join( '/' )
}

// date 0 补位
const formatNumber = n => {
	n = n.toString()
	return n[ 1 ] ? n : '0' + n
}


module.exports = {
	formatSecond,
	getDate,
	formatNumber
}
