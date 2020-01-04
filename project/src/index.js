import _ from 'lodash'
import $ from 'jquery'

const dom = $('div')
dom.html(_.join(['dell','lee'],' '))
$('#root').append(dom)
console.log('xxxxxxxx');

