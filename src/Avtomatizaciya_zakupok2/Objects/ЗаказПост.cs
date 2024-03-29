﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Avtomatizaciya_zakupok2
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Заказ пост.
    /// </summary>
    // *** Start programmer edit section *** (ЗаказПост CustomAttributes)

    // *** End programmer edit section *** (ЗаказПост CustomAttributes)
    [AutoAltered()]
    [Caption("Заказ пост")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ЗаказПостE", new string[] {
            "Номер as \'Номер\'",
            "ДатаНачала as \'Дата начала\'",
            "ДатаОкончания as \'Дата окончания\'",
            "Контрагенты as \'Контрагенты\'",
            "Контрагенты.Контрагент as \'Контрагент\'",
            "Организации as \'Организации\'",
            "Организации.Организация as \'Организация\'",
            "Склады as \'Склады\'",
            "Склады.Склад as \'Склад\'",
            "СостояниеОплаты as \'Состояние оплаты\'",
            "СостОтгрузки as \'Состояние отгрузки\'",
            "СуммаВклНДС as \'Сумма вкл НДС\'",
            "СуммаДокумента as \'Сумма документа\'"}, Hidden=new string[] {
            "Контрагенты.Контрагент",
            "Организации.Организация",
            "Склады.Склад"})]
    [AssociatedDetailViewAttribute("ЗаказПостE", "Заказ", "ТЧЗаказE", true, "", "Заказ", true, new string[] {
            ""})]
    [MasterViewDefineAttribute("ЗаказПостE", "Контрагенты", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Контрагент")]
    [MasterViewDefineAttribute("ЗаказПостE", "Организации", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Организация")]
    [MasterViewDefineAttribute("ЗаказПостE", "Склады", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Склад")]
    [View("ЗаказПостL", new string[] {
            "СостояниеОплаты as \'Состояние оплаты\'",
            "СостОтгрузки as \'Сост отгрузки\'",
            "СуммаВклНДС as \'Сумма вкл НДС\'",
            "СуммаДокумента as \'Сумма документа\'",
            "ДатаНачала as \'Дата начала\'",
            "ДатаОкончания as \'Дата окончания\'",
            "Номер as \'Номер\'",
            "Контрагенты.Контрагент as \'Контрагент\'",
            "Организации.Организация as \'Организация\'",
            "Склады.Склад as \'Склад\'"})]
    public class ЗаказПост : IIS.Avtomatizaciya_zakupok2.ОтчетОЗакупках
    {
        
        private IIS.Avtomatizaciya_zakupok2.Склады fСклады;
        
        private IIS.Avtomatizaciya_zakupok2.Контрагенты fКонтрагенты;
        
        private IIS.Avtomatizaciya_zakupok2.Организации fОрганизации;
        
        private IIS.Avtomatizaciya_zakupok2.DetailArrayOfТЧЗаказ fЗаказ;
        
        // *** Start programmer edit section *** (ЗаказПост CustomMembers)

        // *** End programmer edit section *** (ЗаказПост CustomMembers)

        
        /// <summary>
        /// ДатаНачала.
        /// </summary>
        // *** Start programmer edit section *** (ЗаказПост.ДатаНачала CustomAttributes)

        // *** End programmer edit section *** (ЗаказПост.ДатаНачала CustomAttributes)
        public override System.DateTime ДатаНачала
        {
            get
            {
                // *** Start programmer edit section *** (ЗаказПост.ДатаНачала Get start)

                // *** End programmer edit section *** (ЗаказПост.ДатаНачала Get start)
                System.DateTime result = base.ДатаНачала;
                // *** Start programmer edit section *** (ЗаказПост.ДатаНачала Get end)

                // *** End programmer edit section *** (ЗаказПост.ДатаНачала Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ЗаказПост.ДатаНачала Set start)

                // *** End programmer edit section *** (ЗаказПост.ДатаНачала Set start)
                base.ДатаНачала = value;
                // *** Start programmer edit section *** (ЗаказПост.ДатаНачала Set end)

                // *** End programmer edit section *** (ЗаказПост.ДатаНачала Set end)
            }
        }
        
        /// <summary>
        /// ДатаОкончания.
        /// </summary>
        // *** Start programmer edit section *** (ЗаказПост.ДатаОкончания CustomAttributes)

        // *** End programmer edit section *** (ЗаказПост.ДатаОкончания CustomAttributes)
        public override System.DateTime ДатаОкончания
        {
            get
            {
                // *** Start programmer edit section *** (ЗаказПост.ДатаОкончания Get start)

                // *** End programmer edit section *** (ЗаказПост.ДатаОкончания Get start)
                System.DateTime result = base.ДатаОкончания;
                // *** Start programmer edit section *** (ЗаказПост.ДатаОкончания Get end)

                // *** End programmer edit section *** (ЗаказПост.ДатаОкончания Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ЗаказПост.ДатаОкончания Set start)

                // *** End programmer edit section *** (ЗаказПост.ДатаОкончания Set start)
                base.ДатаОкончания = value;
                // *** Start programmer edit section *** (ЗаказПост.ДатаОкончания Set end)

                // *** End programmer edit section *** (ЗаказПост.ДатаОкончания Set end)
            }
        }
        
        /// <summary>
        /// Номер.
        /// </summary>
        // *** Start programmer edit section *** (ЗаказПост.Номер CustomAttributes)

        // *** End programmer edit section *** (ЗаказПост.Номер CustomAttributes)
        public override int Номер
        {
            get
            {
                // *** Start programmer edit section *** (ЗаказПост.Номер Get start)

                // *** End programmer edit section *** (ЗаказПост.Номер Get start)
                int result = base.Номер;
                // *** Start programmer edit section *** (ЗаказПост.Номер Get end)

                // *** End programmer edit section *** (ЗаказПост.Номер Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ЗаказПост.Номер Set start)

                // *** End programmer edit section *** (ЗаказПост.Номер Set start)
                base.Номер = value;
                // *** Start programmer edit section *** (ЗаказПост.Номер Set end)

                // *** End programmer edit section *** (ЗаказПост.Номер Set end)
            }
        }
        
        /// <summary>
        /// СостОтгрузки.
        /// </summary>
        // *** Start programmer edit section *** (ЗаказПост.СостОтгрузки CustomAttributes)

        // *** End programmer edit section *** (ЗаказПост.СостОтгрузки CustomAttributes)
        public override IIS.Avtomatizaciya_zakupok2.СостПоставок СостОтгрузки
        {
            get
            {
                // *** Start programmer edit section *** (ЗаказПост.СостОтгрузки Get start)

                // *** End programmer edit section *** (ЗаказПост.СостОтгрузки Get start)
                IIS.Avtomatizaciya_zakupok2.СостПоставок result = base.СостОтгрузки;
                // *** Start programmer edit section *** (ЗаказПост.СостОтгрузки Get end)

                // *** End programmer edit section *** (ЗаказПост.СостОтгрузки Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ЗаказПост.СостОтгрузки Set start)

                // *** End programmer edit section *** (ЗаказПост.СостОтгрузки Set start)
                base.СостОтгрузки = value;
                // *** Start programmer edit section *** (ЗаказПост.СостОтгрузки Set end)

                // *** End programmer edit section *** (ЗаказПост.СостОтгрузки Set end)
            }
        }
        
        /// <summary>
        /// СостояниеОплаты.
        /// </summary>
        // *** Start programmer edit section *** (ЗаказПост.СостояниеОплаты CustomAttributes)

        // *** End programmer edit section *** (ЗаказПост.СостояниеОплаты CustomAttributes)
        public override IIS.Avtomatizaciya_zakupok2.СостОплаты СостояниеОплаты
        {
            get
            {
                // *** Start programmer edit section *** (ЗаказПост.СостояниеОплаты Get start)

                // *** End programmer edit section *** (ЗаказПост.СостояниеОплаты Get start)
                IIS.Avtomatizaciya_zakupok2.СостОплаты result = base.СостояниеОплаты;
                // *** Start programmer edit section *** (ЗаказПост.СостояниеОплаты Get end)

                // *** End programmer edit section *** (ЗаказПост.СостояниеОплаты Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ЗаказПост.СостояниеОплаты Set start)

                // *** End programmer edit section *** (ЗаказПост.СостояниеОплаты Set start)
                base.СостояниеОплаты = value;
                // *** Start programmer edit section *** (ЗаказПост.СостояниеОплаты Set end)

                // *** End programmer edit section *** (ЗаказПост.СостояниеОплаты Set end)
            }
        }
        
        /// <summary>
        /// СуммаВклНДС.
        /// </summary>
        // *** Start programmer edit section *** (ЗаказПост.СуммаВклНДС CustomAttributes)

        // *** End programmer edit section *** (ЗаказПост.СуммаВклНДС CustomAttributes)
        public override bool СуммаВклНДС
        {
            get
            {
                // *** Start programmer edit section *** (ЗаказПост.СуммаВклНДС Get start)

                // *** End programmer edit section *** (ЗаказПост.СуммаВклНДС Get start)
                bool result = base.СуммаВклНДС;
                // *** Start programmer edit section *** (ЗаказПост.СуммаВклНДС Get end)

                // *** End programmer edit section *** (ЗаказПост.СуммаВклНДС Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ЗаказПост.СуммаВклНДС Set start)

                // *** End programmer edit section *** (ЗаказПост.СуммаВклНДС Set start)
                base.СуммаВклНДС = value;
                // *** Start programmer edit section *** (ЗаказПост.СуммаВклНДС Set end)

                // *** End programmer edit section *** (ЗаказПост.СуммаВклНДС Set end)
            }
        }
        
        /// <summary>
        /// СуммаДокумента.
        /// </summary>
        // *** Start programmer edit section *** (ЗаказПост.СуммаДокумента CustomAttributes)

        // *** End programmer edit section *** (ЗаказПост.СуммаДокумента CustomAttributes)
        public override int СуммаДокумента
        {
            get
            {
                // *** Start programmer edit section *** (ЗаказПост.СуммаДокумента Get start)

                // *** End programmer edit section *** (ЗаказПост.СуммаДокумента Get start)
                int result = base.СуммаДокумента;
                // *** Start programmer edit section *** (ЗаказПост.СуммаДокумента Get end)

                // *** End programmer edit section *** (ЗаказПост.СуммаДокумента Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ЗаказПост.СуммаДокумента Set start)

                // *** End programmer edit section *** (ЗаказПост.СуммаДокумента Set start)
                base.СуммаДокумента = value;
                // *** Start programmer edit section *** (ЗаказПост.СуммаДокумента Set end)

                // *** End programmer edit section *** (ЗаказПост.СуммаДокумента Set end)
            }
        }
        
        /// <summary>
        /// Заказ пост.
        /// </summary>
        // *** Start programmer edit section *** (ЗаказПост.Контрагенты CustomAttributes)

        // *** End programmer edit section *** (ЗаказПост.Контрагенты CustomAttributes)
        [PropertyStorage(new string[] {
                "Контрагенты"})]
        [NotNull()]
        public virtual IIS.Avtomatizaciya_zakupok2.Контрагенты Контрагенты
        {
            get
            {
                // *** Start programmer edit section *** (ЗаказПост.Контрагенты Get start)

                // *** End programmer edit section *** (ЗаказПост.Контрагенты Get start)
                IIS.Avtomatizaciya_zakupok2.Контрагенты result = this.fКонтрагенты;
                // *** Start programmer edit section *** (ЗаказПост.Контрагенты Get end)

                // *** End programmer edit section *** (ЗаказПост.Контрагенты Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ЗаказПост.Контрагенты Set start)

                // *** End programmer edit section *** (ЗаказПост.Контрагенты Set start)
                this.fКонтрагенты = value;
                // *** Start programmer edit section *** (ЗаказПост.Контрагенты Set end)

                // *** End programmer edit section *** (ЗаказПост.Контрагенты Set end)
            }
        }
        
        /// <summary>
        /// Заказ пост.
        /// </summary>
        // *** Start programmer edit section *** (ЗаказПост.Организации CustomAttributes)

        // *** End programmer edit section *** (ЗаказПост.Организации CustomAttributes)
        [PropertyStorage(new string[] {
                "Организации"})]
        [NotNull()]
        public virtual IIS.Avtomatizaciya_zakupok2.Организации Организации
        {
            get
            {
                // *** Start programmer edit section *** (ЗаказПост.Организации Get start)

                // *** End programmer edit section *** (ЗаказПост.Организации Get start)
                IIS.Avtomatizaciya_zakupok2.Организации result = this.fОрганизации;
                // *** Start programmer edit section *** (ЗаказПост.Организации Get end)

                // *** End programmer edit section *** (ЗаказПост.Организации Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ЗаказПост.Организации Set start)

                // *** End programmer edit section *** (ЗаказПост.Организации Set start)
                this.fОрганизации = value;
                // *** Start programmer edit section *** (ЗаказПост.Организации Set end)

                // *** End programmer edit section *** (ЗаказПост.Организации Set end)
            }
        }
        
        /// <summary>
        /// Заказ пост.
        /// </summary>
        // *** Start programmer edit section *** (ЗаказПост.Склады CustomAttributes)

        // *** End programmer edit section *** (ЗаказПост.Склады CustomAttributes)
        [PropertyStorage(new string[] {
                "Склады"})]
        [NotNull()]
        public virtual IIS.Avtomatizaciya_zakupok2.Склады Склады
        {
            get
            {
                // *** Start programmer edit section *** (ЗаказПост.Склады Get start)

                // *** End programmer edit section *** (ЗаказПост.Склады Get start)
                IIS.Avtomatizaciya_zakupok2.Склады result = this.fСклады;
                // *** Start programmer edit section *** (ЗаказПост.Склады Get end)

                // *** End programmer edit section *** (ЗаказПост.Склады Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ЗаказПост.Склады Set start)

                // *** End programmer edit section *** (ЗаказПост.Склады Set start)
                this.fСклады = value;
                // *** Start programmer edit section *** (ЗаказПост.Склады Set end)

                // *** End programmer edit section *** (ЗаказПост.Склады Set end)
            }
        }
        
        /// <summary>
        /// Заказ пост.
        /// </summary>
        // *** Start programmer edit section *** (ЗаказПост.Заказ CustomAttributes)

        // *** End programmer edit section *** (ЗаказПост.Заказ CustomAttributes)
        public virtual IIS.Avtomatizaciya_zakupok2.DetailArrayOfТЧЗаказ Заказ
        {
            get
            {
                // *** Start programmer edit section *** (ЗаказПост.Заказ Get start)

                // *** End programmer edit section *** (ЗаказПост.Заказ Get start)
                if ((this.fЗаказ == null))
                {
                    this.fЗаказ = new IIS.Avtomatizaciya_zakupok2.DetailArrayOfТЧЗаказ(this);
                }
                IIS.Avtomatizaciya_zakupok2.DetailArrayOfТЧЗаказ result = this.fЗаказ;
                // *** Start programmer edit section *** (ЗаказПост.Заказ Get end)

                // *** End programmer edit section *** (ЗаказПост.Заказ Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ЗаказПост.Заказ Set start)

                // *** End programmer edit section *** (ЗаказПост.Заказ Set start)
                this.fЗаказ = value;
                // *** Start programmer edit section *** (ЗаказПост.Заказ Set end)

                // *** End programmer edit section *** (ЗаказПост.Заказ Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ЗаказПостE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ЗаказПостE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ЗаказПостE", typeof(IIS.Avtomatizaciya_zakupok2.ЗаказПост));
                }
            }
            
            /// <summary>
            /// "ЗаказПостL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ЗаказПостL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ЗаказПостL", typeof(IIS.Avtomatizaciya_zakupok2.ЗаказПост));
                }
            }
        }
    }
}
