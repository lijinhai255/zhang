<template>
	  	<div>
		    <x-chart id="highcharts" class="high" :option="option"></x-chart>
		</div>
</template>
<style>
	/*.high{
    width: 1000px;
    height: 500px;
    margin: 40px auto;
  }*/
</style>
<script>
	// 导入chart组件
	import XChart from '../components/charts'
	export default {
		data() {
			return {
				option1: {
					chart: {
						type: 'column'
					},
					title: {
						text: '月平均降雨量'
					},
					subtitle: {
						text: '数据来源: WorldClimate.com'
					},
					xAxis: {
						categories: [
							'一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'
						],
						crosshair: true
					},
					yAxis: {
						min: 0,
						title: {
							text: '降雨量 (mm)'
						}
					},
					tooltip: {
						// head + 每个 point + footer 拼接成完整的 table
						headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
						pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
							'<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
						footerFormat: '</table>',
						shared: true,
						useHTML: true
					},
					plotOptions: {
						column: {
							borderWidth: 0
						}
					},
					series: [{
						name: '东京',
						data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 500, 194.1, 95.6, 54.4]
					}]
				},
			}
		},
		components: {
			XChart
		}
	}
</script>
