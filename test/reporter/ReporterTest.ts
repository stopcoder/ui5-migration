const assert = require("assert");
import {CompareReportLevel, ReportLevel} from "../../src/reporter/Reporter";

describe("Reporter", function() {
	it("CompareReportLevel", function() {
		assert.equal(
			CompareReportLevel(ReportLevel.TRACE, ReportLevel.INFO),
			-1
		);
		assert.equal(
			CompareReportLevel(ReportLevel.INFO, ReportLevel.TRACE),
			1
		);
	});
});
