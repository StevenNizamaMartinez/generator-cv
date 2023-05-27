const socialNetworkSchema = {
  socialNetwork: { type: String },
  url: { trim: true, type: String },
};

const experienceSchema = {
  area: { trim: true, type: String },
  companyName: { trim: true, type: String },
  description: { trim: true, type: String },
  endDate: { type: Date },
  hierarchy: { trim: true, type: String },
  idExperienceLaborum: { trim: true, type: String },
  imgUrl: { type: String },
  jobPosition: { trim: true, type: String },
  location: { trim: true, type: String },
  startDate: { type: Date },
  workHere: { default: false, type: Boolean },
};

const referentSchema = {
  companyName: { trim: true, type: String },
  name: { trim: true, type: String },
  phoneNumber: { trim: true, type: String },
  experienceId: { trim: true, type: String },
  position: { trim: true, type: String },
};

const educationSchema = {
  academicArea: { trim: true, type: String },
  career: { trim: true, type: String },
  condition: { type: String },
  degree: { type: String },
  description: { trim: true, type: String },
  endDate: { type: Date },
  idEducationLaborum: { type: String },
  imgUrl: { type: String },
  institutionName: { trim: true, type: String },
  startDate: { type: Date },
  studyingHere: { default: false, type: Boolean },
  level: { type: String },
};

const especializationSchema = {
  description: { trim: true, type: String },
  endDate: { type: Date },
  especializationName: { trim: true, type: String },
  especializationPlace: { trim: true, type: String },
  especializationtype: { type: String },
  imgUrl: { type: String },
  startDate: { type: Date },
  studyingHere: { default: false, type: Boolean },
  condition: { type: String },
};

const knowledgeSchema = {
  knowledgeName: { trim: true, type: String },
  level: { type: String }, // Basico intermedio avanzado
};

const fileSchema =
  ({
    fileName: { type: String },
    filenameOriginal: { type: String },
    url: { type: String },
  },
  { timestamps: true });

const emailsPhonesSchema = {
  type: { type: String },
  value: { trim: true, type: String },
};

const salarySchema = {
  amount: { type: Number },
  currency: { type: String },
};

const ProfileSchema =
  ({
    referents: [referentSchema],
    birthDate: { type: Date },
    civilState: { type: String },
    curriculum: fileSchema,
    cv_id: { type: String },
    deleted: { default: false, type: Boolean },
    docNumber: { trim: true, type: String },
    education: [educationSchema],
    emails: [emailsPhonesSchema],
    especialization: [especializationSchema],
    experience: [experienceSchema],
    firstJob: { default: false, type: Boolean },
    firstName: { trim: true, type: String },
    idUser: { type: String },
    knowledge: [knowledgeSchema],
    lastName: { trim: true, type: String },
    phones: [emailsPhonesSchema],
    photo: { type: String },
    salaryExpectation: salarySchema,
    sex: { type: String },
    socialNetworks: [socialNetworkSchema],
    status: {
      default: "none",
      enum: Object.values(ProfileStatus),
      type: String,
    },
    textInfo: {
      default: true,
      type: Boolean,
    },
    userIdLaborum: { type: String },
    websites: [emailsPhonesSchema],
    dni: { type: String },
    passport: { type: String },
    immigrationCard: { type: String },
    docType: { type: String, default: "dni" },
    firstProfileSubmissionDate: { type: Date },
    career: careerSchema,
    candidateId: { type: Schema.Types.ObjectId },
    updatedById: { type: Schema.Types.ObjectId },
    executedById: { type: Schema.Types.ObjectId },
    executerUserType: {
      type: String,
      enum: Object.values(UserType),
      default: UserType.Candidate,
    },
    createdById: { type: Schema.Types.ObjectId },
    nationality: { trim: true, type: String },
    location: { type: String },
    flowUpdatedAt: { type: Date },
    geolocation: geolocationSchema,
    yearsOfExperience: { type: Number },
    lastSectionCode: {
      trim: true,
      type: String,
      enum: Object.values(SectionCode),
    },
    lastFlowPostulation: {
      trim: true,
      type: String,
      enum: Object.values(TypeFlowPostulationCandidate),
    },
    lastJobId: { type: String },
    department: String,
  },
  { timestamps: true });
