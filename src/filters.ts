
type FilterCondition = "on" | "off";

export function isOn(condition?: FilterCondition): boolean {
	return condition === "on";
}

function isNotOff(condition: FilterCondition): boolean {
	return condition !== "off";
}

interface FilterGroup { [s: string]: FilterCondition; }
const kitFilters: FilterGroup = { };

kitFilters["1"] = "off";

class ServerFilter {
	constructor(filterData: any = {}) {
		this.maps = filterData.maps || {};
		this.gameModes = filterData.gameModes || {};
		this.kits = filterData.kits || {};
	}
	[key: string]: any
	public maps: FilterGroup;
	public gameModes: FilterGroup;
	public kits: FilterGroup;
	public vehicles: FilterGroup;
	public weaponClasses: FilterGroup;
	public region: FilterGroup;
	public name: string;

	toJson() : string {
		let minimal : {[key: string] : any }= {};
		Object.keys(this).forEach(key => {
			if (this[key] && this[key] != {}) {
				minimal[key] = this[key]
			}
		});
		return JSON.stringify(minimal);
	}

}


var myFilter = new ServerFilter();
myFilter.gameModes["DOM"] = "off"

var filterJson = myFilter.toJson();

export function deserialize(filterJson: string) : ServerFilter {
	return new ServerFilter(JSON.parse(filterJson));
}

// todo: normalize mix of on and off using

function normalize(filters: FilterGroup) {

}