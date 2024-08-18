import clsx from "clsx";
import {
  Description,
  Field,
  FieldGroup,
  Fieldset,
  Label,
  Legend,
} from "./fieldset";
import { Input } from "./input";

export function LivestockInformation({
  className,
  ...props
}: {
  className?: string;
}) {
  return (
    <Fieldset className={clsx(className, "")} {...props}>
      <Legend>Crop information</Legend>
      <FieldGroup>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-y-4 sm:gap-x-8">
          <Field>
            <Label>Type of livestock</Label>
            <Input name="livestock_type" />
          </Field>
          <Field>
            <Label>Breed</Label>
            <Input name="breed" />
          </Field>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-y-4 sm:gap-x-8">
          <Field>
            <Label>Number of animals</Label>
            <Input name="animals_number" />
          </Field>
          <Field>
            <Label>Birth date</Label>
            <Input name="birth_date" />
          </Field>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-y-4 sm:gap-x-8">
          <Field>
            <Label>Weaning date</Label>
            <Input name="weaning_date" />
          </Field>
          <Field>
            <Label>Weight records</Label>
            <Input name="weight_records" />
            <Description>In tons or bushels</Description>
          </Field>
        </div>
      </FieldGroup>
    </Fieldset>
  );
}

export function SoilHealthMetrics({
  className,
  ...props
}: {
  className?: string;
}) {
  return (
    <Fieldset className={clsx(className, "")} {...props}>
      <Legend>Soil Health Metrics</Legend>
      <FieldGroup>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-y-4 sm:gap-x-8">
          <Field>
            <Label>Soil type</Label>
            <Input name="soil_type" />
          </Field>
          <Field>
            <Label>pH level</Label>
            <Input name="ph_level" />
          </Field>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-y-4 sm:gap-x-8">
          <Field>
            <Label>Nutrient levels (N, P, K)</Label>
            <Input name="nutrient_levels" />
          </Field>
          <Field>
            <Label>Organic matter content</Label>
            <Input name="organic_matter_content" />
          </Field>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-y-4 sm:gap-x-8">
          <Field>
            <Label>Soil moisture levels</Label>
            <Input name="soil_moisture_levels" />
          </Field>
        </div>
      </FieldGroup>
    </Fieldset>
  );
}

export function FarmingPractices({
  className,
  ...props
}: {
  className?: string;
}) {
  return (
    <Fieldset className={clsx(className, "")} {...props}>
      <Legend>Farming practices</Legend>
      <FieldGroup>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-y-4 sm:gap-x-8">
          <Field>
            <Label>Irrigation method</Label>
            <Input name="irrigation_method" />
          </Field>
          <Field>
            <Label>Fertilization schedule</Label>
            <Input name="fertilization_schedule" />
          </Field>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-y-4 sm:gap-x-8">
          <Field>
            <Label>Pest and weed control measures</Label>
            <Input name="pest_and_weed_control_measures" />
          </Field>
          <Field>
            <Label>Crop rotation details</Label>
            <Input name="crop_rotaion_details" />
          </Field>
        </div>
      </FieldGroup>
    </Fieldset>
  );
}

export function WeatherData({ className, ...props }: { className?: string }) {
  return (
    <Fieldset className={clsx(className, "")} {...props}>
      <Legend>Weather Data</Legend>
      <FieldGroup>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-y-4 sm:gap-x-8">
          <Field>
            <Label>Historical weather data</Label>
            <Input name="historical_weather_data" />
          </Field>
          <Field>
            <Label>Current weather conditions</Label>
            <Input name="current_weather_conditions" />
          </Field>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-y-4 sm:gap-x-8">
          <Field>
            <Label>Rainfall amount</Label>
            <Input name="rainfall_amount" />
          </Field>
          <Field>
            <Label>Temperature ranges</Label>
            <Input name="temperature_ranges" />
          </Field>
        </div>
      </FieldGroup>
    </Fieldset>
  );
}

export function PostHarvestData({
  className,
  ...props
}: {
  className?: string;
}) {
  return (
    <Fieldset className={clsx(className, "")} {...props}>
      <Legend>Post-Harvest Data</Legend>
      <FieldGroup>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-y-4 sm:gap-x-8">
          <Field>
            <Label>Storage methods</Label>
            <Input name="storage_methods" />
          </Field>
          <Field>
            <Label>Market prices</Label>
            <Input name="market_prices" />
          </Field>
        </div>
      </FieldGroup>
    </Fieldset>
  );
}
