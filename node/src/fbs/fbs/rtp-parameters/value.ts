// automatically generated by the FlatBuffers compiler, do not modify

import { Boolean, BooleanT } from '../../fbs/rtp-parameters/boolean';
import { Double, DoubleT } from '../../fbs/rtp-parameters/double';
import { Integer, IntegerT } from '../../fbs/rtp-parameters/integer';
import { IntegerArray, IntegerArrayT } from '../../fbs/rtp-parameters/integer-array';
import { String, StringT } from '../../fbs/rtp-parameters/string';


export enum Value {
  NONE = 0,
  Boolean = 1,
  Integer = 2,
  Double = 3,
  String = 4,
  IntegerArray = 5
}

export function unionToValue(
  type: Value,
  accessor: (obj:Boolean|Double|Integer|IntegerArray|String) => Boolean|Double|Integer|IntegerArray|String|null
): Boolean|Double|Integer|IntegerArray|String|null {
  switch(Value[type]) {
    case 'NONE': return null; 
    case 'Boolean': return accessor(new Boolean())! as Boolean;
    case 'Integer': return accessor(new Integer())! as Integer;
    case 'Double': return accessor(new Double())! as Double;
    case 'String': return accessor(new String())! as String;
    case 'IntegerArray': return accessor(new IntegerArray())! as IntegerArray;
    default: return null;
  }
}

export function unionListToValue(
  type: Value, 
  accessor: (index: number, obj:Boolean|Double|Integer|IntegerArray|String) => Boolean|Double|Integer|IntegerArray|String|null, 
  index: number
): Boolean|Double|Integer|IntegerArray|String|null {
  switch(Value[type]) {
    case 'NONE': return null; 
    case 'Boolean': return accessor(index, new Boolean())! as Boolean;
    case 'Integer': return accessor(index, new Integer())! as Integer;
    case 'Double': return accessor(index, new Double())! as Double;
    case 'String': return accessor(index, new String())! as String;
    case 'IntegerArray': return accessor(index, new IntegerArray())! as IntegerArray;
    default: return null;
  }
}
