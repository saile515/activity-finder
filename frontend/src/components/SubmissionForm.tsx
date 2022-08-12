import { FormEvent, useRef, useState } from "react";

enum Category {
	museum = "Museum",
	themePark = "Nöjespark",
	other = "Annat",
}

interface DayOpen {
	openingTime: { hour: number; minute: number };
	closingTime: { hour: number; minute: number };
}

interface ActivityInterface {
	name: string;
	category: string;
	website?: string;
	openingHours?: {
		monday?: DayOpen;
		tuesday?: DayOpen;
		wednesday?: DayOpen;
		thursday?: DayOpen;
		friday?: DayOpen;
		saturday?: DayOpen;
		sunday?: DayOpen;
		alwaysOpen?: boolean;
	};
}

function DayInput(props: { id: string; name: string; single?: boolean; noname?: boolean }) {
	const [enabled, setEnabled] = useState<boolean>(true);
	const containerStyle = `flex justify-center items-center w-16 mx-1 ${
		enabled ? "bg-white" : "bg-gray-200"
	} border-[1px] border-gray-300 rounded shadow`;
	const inputStyle = "w-7 text-center bg-transparent";

	return (
		<div className="flex items-center mb-1">
			{!props.noname && (
				<>
					<label htmlFor={props.id + "Checkbox"} className="font-bold mr-auto">
						{props.name}
					</label>

					<input
						onChange={(event) => setEnabled(event.target.checked)}
						type="checkbox"
						name={props.id + "Checkbox"}
						defaultChecked
						className="h-4 w-4"
					/>
				</>
			)}

			{!props.single && (
				<>
					<div className={containerStyle}>
						<input type="number" name={props.id + "OpenHour"} min={0} max={24} disabled={!enabled} className={inputStyle} />
						:
						<input type="number" name={props.id + "OpenMinute"} min={0} max={24} disabled={!enabled} className={inputStyle} />
					</div>
					-
					<div className={containerStyle}>
						<input type="number" name={props.id + "CloseHour"} min={0} max={24} disabled={!enabled} className={inputStyle} />
						:
						<input type="number" name={props.id + "CloseMinute"} min={0} max={24} disabled={!enabled} className={inputStyle} />
					</div>
				</>
			)}
		</div>
	);
}

export default function SubmissionForm() {
	const ref = useRef<HTMLFormElement>(null);
	const [alwaysOpen, setAlwaysOpen] = useState<boolean>(false);
	const [singleTime, setSingleTime] = useState<boolean>(true);

	function handleChange(event: FormEvent) {
		const target = ref.current as typeof ref.current & any;
		const data: ActivityInterface = {
			name: target.name.value,
			category: target.category.value,
			website: target.website.value,
			openingHours: alwaysOpen
				? { alwaysOpen: alwaysOpen }
				: singleTime
				? {
						monday: target.mondayCheckbox.checked
							? {
									openingTime: { hour: target.timeOpenHour.value, minute: target.timeOpenMinute.value },
									closingTime: { hour: target.timeCloseHour.value, minute: target.timeCloseMinute.value },
							  }
							: undefined,
						tuesday: target.tuesdayCheckbox.checked
							? {
									openingTime: { hour: target.timeOpenHour.value, minute: target.timeOpenMinute.value },
									closingTime: { hour: target.timeCloseHour.value, minute: target.timeCloseMinute.value },
							  }
							: undefined,
						wednesday: target.wednesdayCheckbox.checked
							? {
									openingTime: { hour: target.timeOpenHour.value, minute: target.timeOpenMinute.value },
									closingTime: { hour: target.timeCloseHour.value, minute: target.timeCloseMinute.value },
							  }
							: undefined,
						thursday: target.thursdayCheckbox.checked
							? {
									openingTime: { hour: target.timeOpenHour.value, minute: target.timeOpenMinute.value },
									closingTime: { hour: target.timeCloseHour.value, minute: target.timeCloseMinute.value },
							  }
							: undefined,
						friday: target.fridayCheckbox.checked
							? {
									openingTime: { hour: target.timeOpenHour.value, minute: target.timeOpenMinute.value },
									closingTime: { hour: target.timeCloseHour.value, minute: target.timeCloseMinute.value },
							  }
							: undefined,
						saturday: target.saturdayCheckbox.checked
							? {
									openingTime: { hour: target.timeOpenHour.value, minute: target.timeOpenMinute.value },
									closingTime: { hour: target.timeCloseHour.value, minute: target.timeCloseMinute.value },
							  }
							: undefined,
						sunday: target.sundayCheckbox.checked
							? {
									openingTime: { hour: target.timeOpenHour.value, minute: target.timeOpenMinute.value },
									closingTime: { hour: target.timeCloseHour.value, minute: target.timeCloseMinute.value },
							  }
							: undefined,
				  }
				: {
						monday: target.mondayCheckbox.checked
							? {
									openingTime: { hour: target.mondayOpenHour.value, minute: target.mondayOpenMinute.value },
									closingTime: { hour: target.mondayCloseHour.value, minute: target.mondayCloseMinute.value },
							  }
							: undefined,
						tuesday: target.tuesdayCheckbox.checked
							? {
									openingTime: { hour: target.tuesdayOpenHour.value, minute: target.tuesdayOpenMinute.value },
									closingTime: { hour: target.tuesdayCloseHour.value, minute: target.tuesdayCloseMinute.value },
							  }
							: undefined,
						wednesday: target.wednesdayCheckbox.checked
							? {
									openingTime: { hour: target.wednesdayOpenHour.value, minute: target.wednesdayOpenMinute.value },
									closingTime: { hour: target.wednesdayCloseHour.value, minute: target.wednesdayCloseMinute.value },
							  }
							: undefined,
						thursday: target.thursdayCheckbox.checked
							? {
									openingTime: { hour: target.thursdayOpenHour.value, minute: target.thursdayOpenMinute.value },
									closingTime: { hour: target.thursdayCloseHour.value, minute: target.thursdayCloseMinute.value },
							  }
							: undefined,
						friday: target.fridayCheckbox.checked
							? {
									openingTime: { hour: target.fridayOpenHour.value, minute: target.fridayOpenMinute.value },
									closingTime: { hour: target.fridayCloseHour.value, minute: target.fridayCloseMinute.value },
							  }
							: undefined,
						saturday: target.saturdayCheckbox.checked
							? {
									openingTime: { hour: target.saturdayOpenHour.value, minute: target.saturdayOpenMinute.value },
									closingTime: { hour: target.saturdayCloseHour.value, minute: target.saturdayCloseMinute.value },
							  }
							: undefined,
						sunday: target.sundayCheckbox.checked
							? {
									openingTime: { hour: target.sundayOpenHour.value, minute: target.sundayOpenMinute.value },
									closingTime: { hour: target.sundayCloseHour.value, minute: target.sundayCloseMinute.value },
							  }
							: undefined,
				  },
		};

		console.log(data);
	}

	return (
		<form ref={ref} onChange={handleChange} className="w-[17rem] bg-gray-100 p-1">
			<input type="text" name="name" required />

			<select name="category" required>
				{Object.keys(Category).map((id) => (
					<option value={id} key={id}>
						{Category[id as keyof typeof Category]}
					</option>
				))}
			</select>
			<input type="text" name="website" />
			<div>
				<label htmlFor="alwaysOpen" className="flex items-center">
					Alltid Öppet:{" "}
					<input
						type="checkbox"
						name="alwaysOpen"
						className="ml-auto m-1 h-4 w-4"
						onChange={(event) => setAlwaysOpen(event.target.checked)}
					/>
				</label>
				{!alwaysOpen && (
					<>
						<label htmlFor="alwaysOpen" className="flex items-center">
							Olika Tider:{" "}
							<input
								type="checkbox"
								name="singleTime"
								className="ml-auto m-1 h-4 w-4"
								onChange={(event) => setSingleTime(!event.target.checked)}
							/>
						</label>

						{singleTime && <DayInput name="" id="time" noname />}

						<DayInput name="Monday" id="monday" single={singleTime} />
						<DayInput name="Tuesday" id="tuesday" single={singleTime} />
						<DayInput name="Wednesday" id="wednesday" single={singleTime} />
						<DayInput name="Thursday" id="thursday" single={singleTime} />
						<DayInput name="Friday" id="friday" single={singleTime} />
						<DayInput name="Saturday" id="saturday" single={singleTime} />
						<DayInput name="Sunday" id="sunday" single={singleTime} />
					</>
				)}
			</div>
		</form>
	);
}
