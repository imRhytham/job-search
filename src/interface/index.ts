export interface JdSingle {
	jdUid: string;
	jdLink: string;
	jobDetailsFromCompany: string;
	maxJdSalary: number;
	minJdSalary?: number;
	salaryCurrencyCode: string;
	location: string;
	minExp?: number;
	maxExp?: number;
	jobRole: string;
}

export interface JdList {
	jdList: JdSingle[];
	totalCount: number;
}

export interface JdPayload {
	limit: number;
	offset: number;
}
