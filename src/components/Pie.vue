<template>
	<DxPieChart
		id="pie"
		palette="Bright"
		:data-source="chart.data_source"
		:title="chart.title"
	>
		<DxSeries argument-field="Группа" value-field="Доля">
			<DxLabel :visible="true">
				<DxConnector :visible="true" :width="1" />
			</DxLabel>
		</DxSeries>
		<DxSize :width="500" />
		<DxExport :enabled="true" />
	</DxPieChart>
</template>

<script>
import DxPieChart, {
	DxSize,
	DxSeries,
	DxLabel,
	DxConnector,
	DxExport,
} from "devextreme-vue/pie-chart";

export default {
	name: "Pie",
	props: ["chart"],
	components: {
		DxPieChart,
		DxSize,
		DxSeries,
		DxLabel,
		DxConnector,
		DxExport,
	},
};
</script>

<style lang="scss" scoped></style>
