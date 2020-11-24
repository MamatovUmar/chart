<template>
	<DxChart
		id="chart"
		:data-source="chart.data_source"
		:title="chart.title"
		palette="Violet"
	>
		<DxCommonSeriesSettings type="line" argument-field="Дата" />
		<DxSeries value-field="Процент" name="Процент" />
		<DxMargin :bottom="20" />
		<DxArgumentAxis
			:value-margins-enabled="false"
			discrete-axis-division-mode="crossLabels"
		>
			<DxGrid :visible="true" />
		</DxArgumentAxis>
		<DxLegend
			vertical-alignment="bottom"
			horizontal-alignment="center"
			item-text-position="bottom"
		/>
		<DxExport :enabled="true" />
		<DxTooltip :enabled="true" />
	</DxChart>
</template>

<script>
import {
	DxChart,
	DxSeries,
	DxArgumentAxis,
	DxCommonSeriesSettings,
	DxExport,
	DxGrid,
	DxMargin,
	DxLegend,
	DxTitle,
	DxSubtitle,
	DxTooltip,
} from "devextreme-vue/chart";

export default {
	name: "ChartLine",
	props: ["chart"],
	components: {
		DxChart,
		DxSeries,
		DxArgumentAxis,
		DxCommonSeriesSettings,
		DxExport,
		DxGrid,
		DxMargin,
		DxLegend,
		DxTitle,
		DxSubtitle,
		DxTooltip,
	},
};
</script>

<style lang="scss" scoped></style>
