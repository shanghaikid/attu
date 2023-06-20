const collectionTrans = {
  noLoadData: 'No Loaded Collection',
  noData: 'No Collection',

  rowCount: 'Approx Entity Count',

  create: 'Create Collection',
  delete: 'delete',
  deleteTooltip: 'Please select at least one item to delete.',
  rename: 'rename',
  renameTooltip: 'Please select one item to rename.',
  newColName: 'New Collection Name',
  alias: 'Alias',
  aliasTooltip: 'Please select one collection to create alias',
  download: 'Download',
  downloadTooltip: 'Export all query results to CSV file',
  downloadDisabledTooltip: 'Please query data before exporting',

  collection: 'Collection',
  entites: 'entites',

  // table
  id: 'ID',
  name: 'Name',
  nameTip: 'Collection Name',
  status: 'Status',
  desc: 'Description',
  createdTime: 'Created Time',
  maxLength: 'Max Length',

  // table tooltip
  aliasInfo: 'Alias can be used as collection name in vector search.',
  consistencyLevelInfo:
    'Consistency refers to the property that ensures every node or replica has the same view of data when writing or reading data at a given time.',
  entityCountInfo: 'Approximately entity count.',

  // create dialog
  createTitle: 'Create Collection',
  general: 'General information',
  schema: 'Schema',
  consistency: 'Consistency Level',
  consistencyLevel: 'Consistency Level',
  description: 'Description',
  fieldType: 'Type',
  vectorFieldType: 'Vector Field Type',
  fieldName: 'Field',
  idFieldName: 'Primary Key Field',
  vectorFieldName: 'Vector Field',
  autoId: 'Auto ID',
  autoIdToggleTip:
    'Whether the primary key is automatically generated by Milvus, only suppport INT64.',
  vectorType: 'Type',
  idType: 'Type',
  dimension: 'Dimension',
  dimensionTooltip: 'Only vector type has dimension',
  dimensionMutipleWarning: 'Dimension should be 8 multiple',
  dimensionPositiveWarning: 'Positive number only',
  newBtn: 'add new field',
  nameLengthWarning: 'Name length should be less than 256',
  nameContentWarning: 'Only numbers, letters, and underscores are allowed.',
  nameFirstLetterWarning:
    'Name first character must be underscore or character(a~z, A~Z)',
  partitionKey: 'Partition Key',
  partitionKeyTooltip:
    ' Milvus will store entities in a partition according to the values in the partition key field. Only one Int64 or VarChar field is suppported.',

  // load dialog
  loadTitle: 'Load Collection',
  loadContent:
    'All search and query operations within Milvus are executed in memory, only loaded collection can be searched.',
  loadConfirmLabel: 'Load',
  replicaNum: 'Replica number',
  replicaDes: `With in-memory replicas, Milvus can load the same segment on multiple query nodes. The replica number can not exceed query node count.`,
  enableRepica: `Enable in-memory replica`,

  // release dialog
  releaseTitle: 'Release Collection',
  releaseContent:
    'You are trying to release a collection with data. Please be aware that the data will no longer be available for search.',
  releaseConfirmLabel: 'Release',

  // delete dialog
  deleteWarning: `You are trying to delete a collection with data. This action cannot be undone.`,
  deleteDataWarning: `You are trying to delete entites. This action cannot be undone.`,
  deleteAliasWarning: `You are trying to drop an alias. This action cannot be undone.`,

  // collection tabs
  partitionTab: 'Partitions',
  schemaTab: 'Schema',
  queryTab: 'Data Query',
  previewTab: 'Data Preview',
  startTip: 'Start your data query',
  dataQuerylimits:
    ' Please note that the maximum number of results for your data query is 16384.',
  exprPlaceHolder: 'Please enter your data query, for example id > 0',

  // alias dialog
  aliasCreatePlaceholder: 'Alias name',

  // rename dialog
  newColNamePlaceholder: 'New Collection Name',
  newNameInfo: 'Only numbers, letters, and underscores are allowed.',
};

export default collectionTrans;
