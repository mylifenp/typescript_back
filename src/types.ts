export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type AdditionalEntityFields = {
  path?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type AddGlassLidTypeResult = {
  __typename?: 'AddGlassLidTypeResult';
  glassLidType: GlassLidType;
  success: Scalars['Boolean'];
};

export type AddSensorResult = {
  __typename?: 'AddSensorResult';
  sensor: Sensor;
  success: Scalars['Boolean'];
};

export type AddSensorTypeResult = {
  __typename?: 'AddSensorTypeResult';
  sensorType: SensorType;
  success: Scalars['Boolean'];
};

export type AddShutterTypeResult = {
  __typename?: 'AddShutterTypeResult';
  shutterType: ShutterType;
  success: Scalars['Boolean'];
};

export type AddSpectrumResult = {
  __typename?: 'AddSpectrumResult';
  spectrum: Spectrum;
  success: Scalars['Boolean'];
};

export type AddSupplierResult = {
  __typename?: 'AddSupplierResult';
  success: Scalars['Boolean'];
  supplier: Supplier;
};

export type Complete = {
  __typename?: 'Complete';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type DeleteGlassLidTypeResult = {
  __typename?: 'DeleteGlassLidTypeResult';
  success: Scalars['Boolean'];
};

export type DeleteSensorResult = {
  __typename?: 'DeleteSensorResult';
  success: Scalars['Boolean'];
};

export type DeleteSensorTypeResult = {
  __typename?: 'DeleteSensorTypeResult';
  success: Scalars['Boolean'];
};

export type DeleteShutterTypeResult = {
  __typename?: 'DeleteShutterTypeResult';
  success: Scalars['Boolean'];
};

export type DeleteSpectrumResult = {
  __typename?: 'DeleteSpectrumResult';
  success: Scalars['Boolean'];
};

export type DeleteSupplierResult = {
  __typename?: 'DeleteSupplierResult';
  status: Scalars['Boolean'];
};

export type DeleteUserResult = {
  __typename?: 'DeleteUserResult';
  status: Scalars['Boolean'];
};

export type File = {
  __typename?: 'File';
  encoding: Scalars['String'];
  filename: Scalars['String'];
  mimetype: Scalars['String'];
};

export type GlassLidType = {
  __typename?: 'GlassLidType';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type GlassLidTypeInput = {
  name: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  _?: Maybe<Scalars['Boolean']>;
  addGlassLidType: AddGlassLidTypeResult;
  addSensor: AddSensorResult;
  addSensorType: AddSensorTypeResult;
  addShutterType: AddShutterTypeResult;
  addSpectrum: AddSpectrumResult;
  addSupplier: AddSupplierResult;
  deleteGlassLidType?: Maybe<DeleteGlassLidTypeResult>;
  deleteSensor: DeleteSensorResult;
  deleteSensorType?: Maybe<DeleteSensorTypeResult>;
  deleteShutterType?: Maybe<DeleteShutterTypeResult>;
  deleteSpectrum?: Maybe<DeleteSpectrumResult>;
  deleteSupplier?: Maybe<DeleteSupplierResult>;
  deleteUser: DeleteUserResult;
  makeAdmin: User;
  makeModerator: User;
  signIn: Token;
  signUp: User;
  singleUpload: File;
  updateGlassLidType: UpdateGlassLidTypeResult;
  updateSensor: UpdateSensorResult;
  updateSensorType: UpdateSensorTypeResult;
  updateShutterType: UpdateShutterTypeResult;
  updateSpectrum: UpdateSpectrumResult;
  updateSupplier: UpdateSupplierResult;
};


export type MutationAddGlassLidTypeArgs = {
  input?: InputMaybe<GlassLidTypeInput>;
};


export type MutationAddSensorArgs = {
  input: SensorInput;
};


export type MutationAddSensorTypeArgs = {
  input?: InputMaybe<SensorTypeInput>;
};


export type MutationAddShutterTypeArgs = {
  input?: InputMaybe<ShutterTypeInput>;
};


export type MutationAddSpectrumArgs = {
  input?: InputMaybe<SpectrumInput>;
};


export type MutationAddSupplierArgs = {
  input?: InputMaybe<SupplierInput>;
};


export type MutationDeleteGlassLidTypeArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteSensorArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteSensorTypeArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteShutterTypeArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteSpectrumArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteSupplierArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID'];
};


export type MutationMakeAdminArgs = {
  id: Scalars['ID'];
};


export type MutationMakeModeratorArgs = {
  id: Scalars['ID'];
};


export type MutationSignInArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationSignUpArgs = {
  input: UserInput;
};


export type MutationSingleUploadArgs = {
  file: Scalars['Upload'];
};


export type MutationUpdateGlassLidTypeArgs = {
  id: Scalars['ID'];
  input?: InputMaybe<GlassLidTypeInput>;
};


export type MutationUpdateSensorArgs = {
  id: Scalars['ID'];
  input: SensorInput;
};


export type MutationUpdateSensorTypeArgs = {
  id: Scalars['ID'];
  input?: InputMaybe<SensorTypeInput>;
};


export type MutationUpdateShutterTypeArgs = {
  id: Scalars['ID'];
  input?: InputMaybe<ShutterTypeInput>;
};


export type MutationUpdateSpectrumArgs = {
  id: Scalars['ID'];
  input?: InputMaybe<SpectrumInput>;
};


export type MutationUpdateSupplierArgs = {
  id: Scalars['ID'];
  input?: InputMaybe<SupplierInput>;
};

export type Query = {
  __typename?: 'Query';
  _?: Maybe<Scalars['Boolean']>;
  complete: Complete;
  filterSensors?: Maybe<Array<Sensor>>;
  getFileUrl: UploadResult;
  glassLidType: GlassLidType;
  glassLidTypes: Array<GlassLidType>;
  me?: Maybe<User>;
  sensor: Sensor;
  sensorType: SensorType;
  sensorTypes: Array<SensorType>;
  sensors?: Maybe<Array<Sensor>>;
  shutterType: ShutterType;
  shutterTypes: Array<ShutterType>;
  spectrum: Spectrum;
  spectrums: Array<Spectrum>;
  supplier: Supplier;
  suppliers: Array<Supplier>;
  user?: Maybe<User>;
  users?: Maybe<Array<User>>;
};


export type QueryCompleteArgs = {
  id: Scalars['ID'];
};


export type QueryFilterSensorsArgs = {
  input?: InputMaybe<SensorFilterInput>;
};


export type QueryGetFileUrlArgs = {
  id: Scalars['ID'];
};


export type QueryGlassLidTypeArgs = {
  id: Scalars['ID'];
};


export type QuerySensorArgs = {
  id: Scalars['ID'];
};


export type QuerySensorTypeArgs = {
  id: Scalars['ID'];
};


export type QueryShutterTypeArgs = {
  id: Scalars['ID'];
};


export type QuerySpectrumArgs = {
  id: Scalars['ID'];
};


export type QuerySupplierArgs = {
  id: Scalars['ID'];
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};

export enum Roles {
  Admin = 'ADMIN',
  Moderator = 'MODERATOR',
  User = 'USER'
}

export type Sensor = {
  __typename?: 'Sensor';
  alternative_designation?: Maybe<Scalars['String']>;
  aspect_ratio?: Maybe<Scalars['String']>;
  center_shift_x?: Maybe<Scalars['Float']>;
  center_shift_y?: Maybe<Scalars['Float']>;
  complete?: Maybe<Complete>;
  end_of_life?: Maybe<Scalars['Int']>;
  entry_year?: Maybe<Scalars['Int']>;
  exact_optical_area_diagonal?: Maybe<Scalars['String']>;
  focal_plane_from_bottom?: Maybe<Scalars['Float']>;
  glass_index?: Maybe<Scalars['String']>;
  glass_lid_thickness?: Maybe<Scalars['Float']>;
  glass_lid_type?: Maybe<Array<Maybe<GlassLidType>>>;
  housing_glass?: Maybe<Scalars['Float']>;
  housing_x?: Maybe<Scalars['Float']>;
  housing_y?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  mega_pixel?: Maybe<Scalars['Float']>;
  next_optical_class?: Maybe<Scalars['Float']>;
  optical_area_diagonal?: Maybe<Scalars['Float']>;
  optical_area_x?: Maybe<Scalars['Float']>;
  optical_area_y?: Maybe<Scalars['Float']>;
  optical_center_x?: Maybe<Scalars['Float']>;
  optical_center_y?: Maybe<Scalars['Float']>;
  other_info?: Maybe<Scalars['String']>;
  pixel_lens_cra?: Maybe<Scalars['Float']>;
  pixel_size?: Maybe<Scalars['Float']>;
  sensor_model?: Maybe<Scalars['String']>;
  sensor_type?: Maybe<SensorType>;
  shutter_type?: Maybe<Array<Maybe<ShutterType>>>;
  spectrum?: Maybe<Array<Maybe<Spectrum>>>;
  supplier?: Maybe<Supplier>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  x_resolution?: Maybe<Scalars['Int']>;
  y_resolution?: Maybe<Scalars['Int']>;
};

export type SensorFilterInput = {
  glass_index?: InputMaybe<Scalars['String']>;
  sensor_model?: InputMaybe<Scalars['String']>;
};

export type SensorInput = {
  alternative_designation?: InputMaybe<Scalars['String']>;
  complete?: InputMaybe<Scalars['ID']>;
  end_of_life?: InputMaybe<Scalars['Int']>;
  entry_year?: InputMaybe<Scalars['Int']>;
  focal_plane_from_bottom?: InputMaybe<Scalars['Float']>;
  glass_index?: InputMaybe<Scalars['String']>;
  glass_lid_thickness?: InputMaybe<Scalars['Float']>;
  glass_lid_type?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  housing_glass?: InputMaybe<Scalars['Float']>;
  housing_x?: InputMaybe<Scalars['Float']>;
  housing_y?: InputMaybe<Scalars['Float']>;
  optical_center_x?: InputMaybe<Scalars['Float']>;
  optical_center_y?: InputMaybe<Scalars['Float']>;
  other_info?: InputMaybe<Scalars['String']>;
  pixel_lens_cra?: InputMaybe<Scalars['Float']>;
  pixel_size?: InputMaybe<Scalars['Float']>;
  sensor_model?: InputMaybe<Scalars['String']>;
  sensor_type?: InputMaybe<Scalars['ID']>;
  shutter_type?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  spectrum?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  supplier?: InputMaybe<Scalars['ID']>;
  x_resolution?: InputMaybe<Scalars['Int']>;
  y_resolution?: InputMaybe<Scalars['Int']>;
};

export type SensorType = {
  __typename?: 'SensorType';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type SensorTypeInput = {
  name: Scalars['String'];
};

export type ShutterType = {
  __typename?: 'ShutterType';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type ShutterTypeInput = {
  name: Scalars['String'];
};

export type Spectrum = {
  __typename?: 'Spectrum';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type SpectrumInput = {
  name: Scalars['String'];
};

export type Supplier = {
  __typename?: 'Supplier';
  id: Scalars['ID'];
  name: Scalars['String'];
  sensors?: Maybe<Array<Maybe<Sensor>>>;
  url?: Maybe<Scalars['String']>;
};

export type SupplierInput = {
  name: Scalars['String'];
  url?: InputMaybe<Scalars['String']>;
};

export type Token = {
  __typename?: 'Token';
  expires: Scalars['String'];
  token: Scalars['String'];
};

export type UpdateGlassLidTypeResult = {
  __typename?: 'UpdateGlassLidTypeResult';
  glassLidType: GlassLidType;
  success: Scalars['Boolean'];
};

export type UpdateSensorResult = {
  __typename?: 'UpdateSensorResult';
  sensor?: Maybe<Sensor>;
  success: Scalars['Boolean'];
};

export type UpdateSensorTypeResult = {
  __typename?: 'UpdateSensorTypeResult';
  sensorType: SensorType;
  success: Scalars['Boolean'];
};

export type UpdateShutterTypeResult = {
  __typename?: 'UpdateShutterTypeResult';
  shutterType: ShutterType;
  success: Scalars['Boolean'];
};

export type UpdateSpectrumResult = {
  __typename?: 'UpdateSpectrumResult';
  spectrum: Spectrum;
  success: Scalars['Boolean'];
};

export type UpdateSupplierResult = {
  __typename?: 'UpdateSupplierResult';
  success: Scalars['Boolean'];
  supplier: Supplier;
};

export type UploadResult = {
  __typename?: 'UploadResult';
  thumbnail: Scalars['String'];
  url: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  id: Scalars['ID'];
  role: Roles;
};

export type UserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

import { ObjectId } from 'mongodb';