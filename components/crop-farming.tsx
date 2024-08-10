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

export function CropInformation({
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
            <Label>Crop type</Label>
            <Input name="crop_type" />
          </Field>
          <Field>
            <Label>Variety</Label>
            <Input name="variety" />
          </Field>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-y-4 sm:gap-x-8">
          <Field>
            <Label>Planting date</Label>
            <Input name="planting_date" />
          </Field>
          <Field>
            <Label>Expected harvest date</Label>
            <Input name="expected_harvest_date" />
          </Field>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-y-4 sm:gap-x-8">
          <Field>
            <Label>Actual harvest date</Label>
            <Input name="actual_harvest_date" />
          </Field>
          <Field>
            <Label>Yield</Label>
            <Input name="yield" />
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
